import { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { MesinApiRepository } from "@data/api/mesin/mesin-api-repository";
import { Mesin } from "@domain/models/mesin/mesin";
import { SubMesinApiRepository } from "@data/api/mesin/submesin-api-repository";
import { SubMesin } from "@domain/models/mesin/sub-mesin";
import { ParameterApiRepository } from "@data/api/mesin/parameter-api-repository";
import { Parameter } from "@domain/models/mesin/parameter";
import { IndikatorApiRepository } from "@data/api/mesin/indikator-api-repository";
import { Indikator } from "@domain/models/mesin/indikator";
import { UomApiRepository } from "@data/api/mesin/uom-api-repository";
import { UnitOfMeasure } from "@domain/models/mesin/uom";

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

  //api authenticationRepository
  const mesinRepository = new MesinApiRepository();
  const subMesinRepository = new SubMesinApiRepository();
  const parameterRepository = new ParameterApiRepository();
  const indikatorRepository = new IndikatorApiRepository();
  const uomRepository = new UomApiRepository();

  //state data mesin
  const [dataMesin, setDataMesin] = useState<Mesin[]>([]);

  const [dataSubMesin, setDataSubMesin] = useState<SubMesin[]>([]);

  const [dataParameter, setDataParameter] = useState<Parameter[]>([]);

  const [dataIndikator, setDataIndikator] = useState<Indikator[]>([]);

  const [dataUom, setDataUom] = useState<UnitOfMeasure[]>([]);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  // create manpower data
  const createMesin = (data) => {
    console.log(data);
  };

  // get data mesin
  const getDataMesin = async () => {
    setIsLoadingData(true);
    try {
      const result = await mesinRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataMesin(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data submesin
  const getDataSubMesin = async () => {
    setIsLoadingData(true);
    try {
      const result = await subMesinRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSubMesin(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data parameter
  const getDataParameter = async () => {
    setIsLoadingData(true);
    try {
      const result = await parameterRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataParameter(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data indikator
  const getDataIndikator = async () => {
    setIsLoadingData(true);
    try {
      const result = await indikatorRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataIndikator(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data Uom
  const getDataUom = async () => {
    setIsLoadingData(true);
    try {
      const result = await uomRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataUom(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMaxDesc(watch("deskripsi")?.length);
  }, [watch("deskripsi")]);

  useEffect(() => {
    if (type == "mesin") {
      getDataMesin();
    } else if (type == "sub-mesin") {
      getDataSubMesin();
    } else if (type == "parameter") {
      getDataParameter();
    } else if (type == "indikator") {
      getDataIndikator();
    } else if (type == "uom") {
      getDataUom();
    } else {
      setDataMesin([]);
      setDataSubMesin([]);
      setDataParameter([]);
      setDataIndikator([]);
      setDataUom([]);
    }
  }, [type]);

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
    dataMesin,
    isLoadingData,
    dataSubMesin,
    dataParameter,
    dataIndikator,
    dataUom,
  };
}
