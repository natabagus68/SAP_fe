import { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ManpowerApiRepository } from "@data/api/manpower/manpower-api-repository";
import { Manpower } from "@domain/models/manpower/manpower";

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
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  //api authenticationRepository
  const manpowerRepository = new ManpowerApiRepository();
  //state data manpower
  const [dataManpower, setDataManpower] = useState<Manpower[]>([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  // create manpower data
  const createManpower = (data) => {
    console.log(data);
  };
  // get data manpower
  const getDataManpower = async () => {
    setIsLoadingData(true);
    try {
      const result = await manpowerRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataManpower(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(type == "manpower"){
      getDataManpower();
    }else{
      setDataManpower([]);
    }
  }, [type]);

  return {
    state,
    searchParams,
    // urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    dataManpower,
    isLoadingData,
    setSearchParams,
    // setUrlParams,
    navigate,
    createManpower,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
  };
}
