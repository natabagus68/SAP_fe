import { AuthenticationApiRepository } from "@data/api/auth/authentication-api-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useGuest() {
  const navigate = useNavigate();
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  //api authenticationRepository
  const authenticationRepository = new AuthenticationApiRepository();

  //checking me
  const onIsMe = async () => {
    setIsLoading(true);
    try {
      const result = await authenticationRepository.me();
      setTimeout(() => {
        setIsLoading(false);
        navigate(`../admin/dashboard/general`, {replace: true});
      }, 500);
    } catch (error) {
      setIsLoading(false);
      navigate("../login", {replace: true});
    }
  };

  useEffect(() => {
    onIsMe();
  }, []);
  return {
    isLoading,
  };
}
