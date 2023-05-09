import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function useLocationHooks() {
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
      departemen: state?.data?.departemen,
      section: state?.data?.section,
    },
  });
  //state & default data url params
  const [urlParams, setUrlParams] = useState({
    type: "location",
  });
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  // create location data
  const createLocation = (data) => {
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
    type,
    setSearchParams,
    setUrlParams,
    navigate,
    createLocation,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
  };
}
