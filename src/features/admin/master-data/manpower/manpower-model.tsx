import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function useManpower() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nip: state?.data?.nip,
      name: state?.data?.name,
      departemen: state?.data?.departemen,
      posisi: state?.data?.posisi,
      section: state?.data?.section,
      photo: state?.data?.photo,
    },
  });
  // //state & default data url params
  // const [urlParams, setUrlParams] = useState({
  //   type: "manpower",
  // });
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  // create manpower data
  const createManpower = (data) => {
    console.log(data);
  };
  
  useEffect(() => {
    // console.log(2);
  }, []);

  return {
    state,
    searchParams,
    // urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    setSearchParams,
    // setUrlParams,
    navigate,
    createManpower,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess
  };
}
