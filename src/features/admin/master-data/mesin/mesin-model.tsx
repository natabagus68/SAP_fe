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
import { Section } from "@domain/models/location/section";
import { SectionApiRepository } from "@data/api/location/section-api-repository";

export default function useMesin() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type, id } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();

  //state data mesin by id
  const [dataMesinById, setDataMesinById] = useState(null);

  //state data submesin by id
  const [dataSubmesinById, setDataSubmesinById] = useState(null);

  //state data Indikator by id
  const [dataIndikatorById, setDataIndikatorById] = useState(null);

  //state data Parameter by id
  const [dataParameterById, setDataParameterById] = useState(null);

  //state data Uom by id
  const [dataUomById, setDataUomById] = useState(null);

  //setup react form hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      name:
        type == "mesin"
          ? dataMesinById?.name
          : type == "sub-mesin"
          ? dataSubmesinById?.name
          : type == "parameter"
          ? dataParameterById?.name
          : type == "indikator"
          ? dataIndikatorById?.name
          : dataUomById?.name,
      sub_machine_no: dataSubmesinById?.sub_machine_no,

      no: dataMesinById?.no,
      section: dataMesinById?.section,
      photo: dataMesinById?.photo,

      indikator: dataParameterById?.indikator,
      variable: dataParameterById?.variable,

      uom: dataUomById?.uom,

      batasAtas: dataParameterById?.batasAtas,
      batasBawah: dataParameterById?.batasBawah,
      deskripsi: dataIndikatorById?.deskripsi,
      //title: state?.data?.title,
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

  //api repository section
  const sectionRepository = new SectionApiRepository();

  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //state data mesin
  const [dataMesin, setDataMesin] = useState<Mesin[]>([]);

  const [dataSubMesin, setDataSubMesin] = useState<SubMesin[]>([]);

  const [dataParameter, setDataParameter] = useState<Parameter[]>([]);

  const [dataIndikator, setDataIndikator] = useState<Indikator[]>([]);

  const [dataUom, setDataUom] = useState<UnitOfMeasure[]>([]);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state message from api
  const [message, setMessage] = useState(null);

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  // get data mesin
  const getDataMesin = async () => {
    setIsLoadingData(true);
    setDataMesin([]);
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
    setDataSubMesin([]);
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
    setDataParameter([]);
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
    setDataIndikator([]);
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
    setDataUom([]);
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

  // get data section
  const getDataSection = async () => {
    try {
      const result = await sectionRepository.getSection();
      setDataSection(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  //get data by id
  const getDataMesinById = async (id: string) => {
    try {
      const result = await mesinRepository.getDataById(id);
      setTimeout(() => {
        setDataMesinById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getDataSubmesinById = async (id: string) => {
    try {
      const result = await subMesinRepository.getDataById(id);
      setTimeout(() => {
        setDataSubmesinById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getDataIndikatorById = async (id: string) => {
    try {
      const result = await indikatorRepository.getDataById(id);
      setTimeout(() => {
        setDataIndikatorById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getDataParameterById = async (id: string) => {
    try {
      const result = await parameterRepository.getDataById(id);
      setTimeout(() => {
        setDataParameterById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getDataUomById = async (id: string) => {
    try {
      const result = await uomRepository.getDataById(id);
      setTimeout(() => {
        setDataUomById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  // create  data
  const createMesin = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await mesinRepository.create(
        Mesin.create({
          id: data.id,
          name: data.name,
          machine_no: data.machine_no,
          section_name: data.section_name,
          section_id: data.section_id,
          photo: data.photo,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const createSubmesin = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    console.log(data);

    try {
      const result = await subMesinRepository.create(
        SubMesin.create({
          id: data.id,
          name: data.name,
          sub_machine_no: data.sub_machine_no,
        })
      );
      console.log(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  const createIndikator = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await indikatorRepository.create(
        Indikator.create({
          id: data.id,
          name: data.name,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const createParameter = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await parameterRepository.create(
        Parameter.create({
          id: data.id,
          indicator: data.indicator,
          name: data.name,
          variable: data.variable,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const createUom = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await uomRepository.create(
        UnitOfMeasure.create({
          id: data.id,
          name: data.name,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  //edit  data
  const editMesin = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await mesinRepository.edit(
        Mesin.create({
          id: id,
          name: data.name,
          machine_no: data.machine_no,
          section_name: data.section_name,
          section_id: data.section_id,
          photo: data.photo,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const editSubmesin = async (data) => {
    console.log(data, "edit submesin");

    setIsLoadingData(true);
    try {
      const result = await subMesinRepository.edit(
        SubMesin.create({
          id: data.id,
          name: data.name,
          sub_machine_no: data.sub_machine_no,
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

  const editIndikator = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await indikatorRepository.edit(
        Indikator.create({
          id: data.id,
          name: data.name,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const editParameter = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await parameterRepository.edit(
        Parameter.create({
          id: data.id,
          indicator: data.indicator,
          name: data.name,
          variable: data.variable,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const editUom = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await uomRepository.edit(
        UnitOfMeasure.create({
          id: data.id,
          name: data.name,
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  //delete  data
  const deleteMesin = async (id: string, setIsLoading) => {
    try {
      const result = await mesinRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataMesin();
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

  const deleteSubmesin = async (id: string, setIsLoading) => {
    try {
      const result = await subMesinRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataSubMesin();
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

  const deleteIndikator = async (id: string, setIsLoading) => {
    try {
      const result = await indikatorRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataIndikator();
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

  const deleteParameter = async (id: string, setIsLoading) => {
    try {
      const result = await parameterRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataParameter();
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

  const deleteUom = async (id: string, setIsLoading) => {
    try {
      const result = await uomRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataUom();
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
    setMaxDesc(watch("deskripsi")?.length);
  }, [watch("deskripsi")]);

  useEffect(() => {
    setMessage(null);
    getDataMesin();
    getDataSubMesin();
    getDataParameter();
    getDataIndikator();
    getDataUom();
  }, []);

  useEffect(() => {
    if (type == "mesin") {
      getDataMesin();
      setDataSubMesin([]);
      setDataIndikator([]);
      setDataParameter([]);
      setDataUom([]);
    } else if (type == "sub-mesin") {
      getDataSubMesin();
      setDataMesin([]);
      setDataIndikator([]);
      setDataParameter([]);
      setDataUom([]);
    } else if (type == "parameter") {
      getDataParameter();
      setDataSubMesin([]);
      setDataIndikator([]);
      setDataMesin([]);
      setDataUom([]);
    } else if (type == "indikator") {
      getDataIndikator();
      setDataSubMesin([]);
      setDataMesin([]);
      setDataParameter([]);
      setDataUom([]);
    } else {
      getDataUom();
      setDataSubMesin([]);
      setDataIndikator([]);
      setDataParameter([]);
      setDataMesin([]);
    }
  }, [type]);

  useEffect(() => {
    if (!!id && type == "mesin") {
      getDataSubmesinById(id);
    } else if (!!id && type == "sub-mesin") {
      getDataSubmesinById(id);
    } else if (!!id && type == "parameter") {
      getDataParameterById(id);
    } else if (!!id && type == "indikator") {
      getDataIndikatorById(id);
    } else if (!!id && type == "uom") {
      getDataUomById(id);
    }
  }, [id, type]);

  // useEffect(() => {
  //   if (type == "mesin") {
  //     getDataMesin();
  //   } else if (type == "sub-mesin") {
  //     getDataSubMesin();
  //   } else if (type == "parameter") {
  //     getDataParameter();
  //   } else if (type == "indikator") {
  //     getDataIndikator();
  //   } else if (type == "uom") {
  //     getDataUom();
  //   } else {
  //     setDataMesin([]);
  //     setDataSubMesin([]);
  //     setDataParameter([]);
  //     setDataIndikator([]);
  //     setDataUom([]);
  //   }
  // }, [type]);

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
    editMesin,
    deleteMesin,
    createSubmesin,
    editSubmesin,
    deleteSubmesin,
    editIndikator,
    createIndikator,
    deleteIndikator,
    deleteParameter,
    editParameter,
    createParameter,
    createUom,
    deleteUom,
    editUom,
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
    dataId,
    dataSection,
    message,
    isSuccess,
    getDataSubmesinById,
    getDataMesinById,
    getDataSection,
    getDataIndikatorById,
    getDataParameterById,
    getDataUomById,
    dataSubmesinById,
    dataMesinById,
    dataUomById,
    dataIndikatorById,
    dataParameterById,
    id,
    setDataId,
  };
}
