import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function useAccess() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type } = useParams();
  //data Access
  const [dataAccess, setDataAccess] = useState([]);

  //setup react from hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      menu: state?.data?.menu,
      role: state?.data?.role,
    },
  });

  //modal Accesss
  const [openModalAccess, setOpenModalAccess] = useState(false);
  //modal Confirmasi
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //modal Delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //modal Success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //state & default data url params
  const [urlParams, setUrlParams] = useState({
    type: "Access",
  });

  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  const onOpenBackMenu = (): void => {
    setOpenModalAccess(false);
  };

  // create account data
  const createAcccess = (data) => {
    console.log(data);
  };

  return {
    navigate,
    state,
    type,
    dataAccess,
    setDataAccess,
    register,
    handleSubmit,
    errors,
    openModalConfirm,
    setOpenModalConfirm,
    openModalDelete,
    setOpenModalDelete,
    openModalSuccess,
    setOpenModalSuccess,
    onOpenBack,
    urlParams,
    setUrlParams,
    openModalAccess,
    setOpenModalAccess,
    onOpenBackMenu,
    createAcccess,
  };
}
