import { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { FrequencyApiRepository } from "@data/api/frequency/frequency-api-repository";
import { Frequency } from "@domain/models/frequency/frequency";

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

  //api authenticationRepository
  const frequencyRepository = new FrequencyApiRepository();
  //state data manpower
  const [dataFrequency, setDataFrequency] = useState<Frequency[]>([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  // get data manpower
  const getDataFrequency = async () => {
    setIsLoadingData(true);
    try {
      const result = await frequencyRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataFrequency(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFrequency();
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
    dataFrequency,
    isLoadingData,
  };
}
