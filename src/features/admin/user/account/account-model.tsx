import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function useAccount() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type } = useParams();
  //data User
  const [dataUser, setDataUser] = useState([]);

  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: state?.data?.id,
      manpower: state?.data?.manpower,
      email: state?.data?.email,
      password: state?.data?.password,
      role: state?.data?.role,
    },
  });

  //modal Confirmasi
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //modal Delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //modal Success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //state & default data url params
  const [urlParams, setUrlParams] = useState({
    type: "Account",
  });

  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  // create account data
  const createAccount = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // console.log(2);
  }, []);

  return {
    state,
    navigate,
    dataUser,
    setDataUser,
    openModalConfirm,
    setOpenModalConfirm,
    openModalDelete,
    setOpenModalDelete,
    openModalSuccess,
    setOpenModalSuccess,
    urlParams,
    setUrlParams,
    createAccount,
    onOpenBack,
    type,
    handleSubmit,
    register,
    errors,
  };
}
