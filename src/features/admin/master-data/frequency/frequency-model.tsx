import { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";

export default function useFrequency() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: state?.data?.id,
      frequency: state?.data?.frequency,
    },
  });
  //state & default data url params
  const [urlParams, setUrlParams] = useState({
    type: "manpower",
  });
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  // create manpower data
  const createMesin = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // console.log(2);
  }, []);

  return {
    state,
    searchParams,
    urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    setSearchParams,
    setUrlParams,
    navigate,
    createMesin,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
  };
}
