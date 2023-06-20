import { AuthenticationApiRepository } from "@data/api/auth/authentication-api-repository";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Authentication } from "@domain/models/auth/authentication";

export default function useLogin() {
  const navigate = useNavigate();
  //input password
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  //state message error
  const [messages, setMessages] = useState<string>("");
  //input password
  const onPasswordShow = (): void => {
    setIsPasswordShow(!!!isPasswordShow);
  };
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  //api authenticationRepository
  const authenticationRepository = new AuthenticationApiRepository();

  //button login
  const onSubmitLogin = async (data) => {
    try {
      const result = await authenticationRepository.login(
        Authentication.create({
          email: data.email,
          password: data.password,
        })
      );
      console.log(result.token, "cek");

      setMessages("");
      await localStorage.setItem(
        "aop-sap",
        JSON.stringify({ token: result.token })
      );
      navigate("../admin/dashboard/dashboard-view");
    } catch (error) {
      setMessages(error.response?.data?.errors);
    }
  };
  //checking me
  const onIsMe = async () => {
    setIsLoading(true);
    try {
      const result = await authenticationRepository.me();
      //console.log(result, "halo");

      setTimeout(() => {
        setIsLoading(false);
        navigate(`../admin`, { replace: true });
      }, 500);
    } catch (error) {
      setIsLoading(false);
      navigate("../login", { replace: true });
    }
  };

  useEffect(() => {
    onIsMe();
  }, []);

  return {
    isPasswordShow,
    errors,
    messages,
    isLoading,
    onPasswordShow,
    onSubmitLogin,
    register,
    handleSubmit,
  };
}
