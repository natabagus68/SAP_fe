import { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";

export default function useMesin() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      no: state?.data?.no,
      name: state?.data?.name,
      section: state?.data?.section,
      photo: state?.data?.photo,
      indikator: state?.data?.indikator,
      variable: state?.data?.variable,
      uom: state?.data?.uom,
      batasAtas: state?.data?.batasAtas,
      batasBawah: state?.data?.batasBawah,
      deskripsi: state?.data?.deskripsi,
      title: state?.data?.title,
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
  //state max desc
  const [maxDesc, setMaxDesc] = useState<number>(0);

  // create manpower data
  const createMesin = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setMaxDesc(watch("deskripsi")?.length)
  }, [watch("deskripsi")]);

  return {
    state,
    searchParams,
    urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    maxDesc,
    setSearchParams,
    setUrlParams,
    navigate,
    createMesin,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    setMaxDesc,
  };
}
