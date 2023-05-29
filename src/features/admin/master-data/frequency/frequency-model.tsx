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
import { DefaultResponse } from "@domain/models/default-response";

export default function useFrequency() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { frequencyId, page } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();

  //state data by id
  const [dataFrequencyById, setDataFrequencyById] = useState(null);

  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      id: dataFrequencyById?.id,
      type: dataFrequencyById?.type,
    },
  });
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  //api authenticationRepository
  const frequencyRepository = new FrequencyApiRepository();
  //state data frequency
  const [dataFrequency, setDataFrequency] = useState<DefaultResponse>(
    DefaultResponse.create({
      success: false,
      message: "",
      data: [],
    })
  );

  const [dataFrequencyByPage, setDataFrequencyByPage] = useState([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state message from api
  const [message, setMessage] = useState(null);

  // get data frequency
  const getDataFrequency = async () => {
    setIsLoadingData(true);
    setDataFrequency(null);
    try {
      const result = await frequencyRepository.getDataByPage(
        !!Number(page) ? page : "1",
        "1"
      );
      setTimeout(() => {
        setIsLoadingData(false);
        setDataFrequency(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataFrequencyByPage = async () => {
    setDataFrequency(null);
    try {
      const result = await frequencyRepository.getDataByPage();
      setDataFrequencyByPage(result.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  // create frequency data
  const createFrequency = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await frequencyRepository.create(
        Frequency.create({
          type: data.type,
          id: data.id,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoadingData(false);
        setMessage("Form Harus diisi Semua!!");
      }, 500);
      throw new Error(error);
    }
  };

  //get data by id
  const getDataFrequencyById = async (id: string) => {
    try {
      const result = await frequencyRepository.getDataById(id);
      setTimeout(() => {
        setDataFrequencyById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  //edit frequency data
  const editFrequency = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await frequencyRepository.edit(
        Frequency.create({
          id: data.id,
          type: data.type,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setIsLoadingData(false);
      throw new Error(error);
    }
  };

  // detele data damage
  const deleteDataFrequency = async (id: string, setIsLoading) => {
    try {
      const result = await frequencyRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataFrequency();
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    } catch (error) {
      setIsSuccess(false);
      setTimeout(() => {
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
        throw new Error(error);
      }, 500);
    }
  };

  useEffect(() => {
    setMessage(null);
    getDataFrequency();
  }, []);

  useEffect(() => {
    if (!!!Number(page)) {
      navigate(`../master-data/:page/frequency`);
    }
  }, []);

  useEffect(() => {
    getDataFrequency();
  }, [page]);

  useEffect(() => {
    if (!!frequencyId) {
      getDataFrequencyById(frequencyId);
    }
  }, [frequencyId]);

  return {
    state,
    errors,
    navigate,
    register,
    dataId,
    dataFrequency,
    setDataId,
    frequencyId,
    message,
    searchParams,
    setSearchParams,
    isSuccess,
    handleSubmit,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    getDataFrequencyById,
    isLoadingData,
    createFrequency,
    deleteDataFrequency,
    editFrequency,
  };
}
