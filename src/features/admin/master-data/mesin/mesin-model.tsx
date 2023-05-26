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
import { FrequencyApiRepository } from "@data/api/frequency/frequency-api-repository";
import { Frequency } from "@domain/models/frequency/frequency";

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
          : type == "uom"
          ? dataUomById?.name
          : null,

      sub_mechine_no: dataSubmesinById?.no,

      machine_no: dataMesinById?.machine_no,
      section: dataMesinById?.section_id,
      photo: dataMesinById?.photo,

      indicator: dataParameterById?.indicator,
      variable: dataParameterById?.variable,
      // batasAtas: dataParameterById?.batasAtas,
      // batasBawah: dataParameterById?.batasBawah,

      deskripsi: state?.data?.deskripsi,
    },
  });

  //state & default data url params
  const [urlParams, setUrlParams] = useState({
    type: "mesin",
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

  //api authenticationRepository
  const frequencyRepository = new FrequencyApiRepository();
  //state data frequency
  const [dataFrequency, setDataFrequency] = useState<Frequency[]>([]);

  const [isSeclectVar, setIsSelectVar] = useState("");

  // get data frequency
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

  //state form Submesin detail
  const [subMesinDetail, setSubMesinDetail] = useState([
    // {
    //   subMachineId: "",
    //   parameters: [
    //     {
    //       parameterId: "",
    //       interval: "",
    //       frequencyTypeId: "",
    //     },
    //   ],
    // },
  ]);

  const [variableDetail, setVariableDetail] = useState([]);

  const addFormSubmesin = () => {
    setSubMesinDetail([
      ...subMesinDetail,
      {
        subMachineId: "",
        parameters: [
          {
            parameterId: "",
            interval: "",
            frequencyTypeId: "",
          },
        ],
      },
    ]);
  };

  const removeFormSubmesin = (i) => {
    let arr = [...subMesinDetail];
    arr[i] = undefined;
    arr = arr.filter((e) => e);
    setSubMesinDetail(arr);
  };

  const addFieldParameter = (i) => {
    let arr = [...subMesinDetail];
    arr[i].parameters = [
      ...arr[i].parameters,
      {
        parameterId: "",
        interval: "",
        frequencyTypeId: "",
      },
    ];
    setSubMesinDetail(arr);
  };

  const removeFieldParameter = (i, idx) => {
    let arr = [...subMesinDetail];
    arr[i].parameters[idx] = undefined;
    arr[i].parameters = arr[i].parameters.filter((e) => e);
    setSubMesinDetail(arr);
  };

  const setValueSubMachine = (i, value) => {
    let arr = [...subMesinDetail];
    arr[i].subMachineId = value;
    setSubMesinDetail(arr);
  };

  const setValueParameter = (i, idx, value) => {
    let arr = [...subMesinDetail];
    arr[i].parameters[idx].parameterId = value;
    setSubMesinDetail(arr);
  };

  const setValueInterval = (i, idx, value) => {
    let arr = [...subMesinDetail];
    arr[i].parameters[idx].interval = value;
    setSubMesinDetail(arr);
  };

  const setValueFrequency = (i, idx, value) => {
    let arr = [...subMesinDetail];
    arr[i].parameters[idx].frequencyTypeId = value;
    setSubMesinDetail(arr);
  };

  const FormChangeSubmesin = (item, e) => {
    let data = [...subMesinDetail];
    data[item][e.target.name] = e.target.value;
    setSubMesinDetail(data);
  };

  const valueStatusChange = (e) => {
    setIsSelectVar(e.target.value);
    setVariableDetail([]);
  };

  const addFormVariable = () => {
    setVariableDetail([
      ...variableDetail,

      {
        uomId: "",
        upperLimit: "",
        lowerLimit: "",
      },
    ]);
  };

  const setValueUom = (i, value) => {
    let data = [...variableDetail];
    data[i].uom_id = value;
    setVariableDetail(data);
    console.log(data, "cek datavalue");
  };

  const setValueUpperLimit = (i, value) => {
    let data = [...variableDetail];
    data[i].upperLimit = value;
    setVariableDetail(data);
  };

  const setValueLowerrLimit = (i, value) => {
    let data = [...variableDetail];
    data[i].lowerLimit = value;
    setVariableDetail(data);
  };

  // const removeFormSubmesin = (item) => {
  //   let data = [...subMesinDetail];
  //   data.splice(item, 1);
  //   setSubMesinDetail(data);
  // };

  // //state filed parameter detail
  // const [parameterDetail, setParameterDetail] = useState([
  //   {
  //     parameters: [null],
  //     intervals: [null],
  //     frequencys: [null],
  //   },
  // ]);

  // const FormChangeParameter = (item, e) => {
  //   let data = [...parameterDetail];
  //   data[item][e.target.parameterId] = e.target.value;
  //   data[item][e.target.interval] = e.target.value;
  //   data[item][e.target.frequencyId] = e.target.value;
  //   setParameterDetail(data);
  // };

  // //state form variable
  // const [variableForm, setVariableForm] = useState([
  //   {
  //     uom: "",
  //     batasAtas: "",
  //     batasBawah: "",
  //   },
  // ]);

  // const addFormVariable = () => {
  //   let newFormVariable = {
  //     uom: "",
  //     batasAtas: "",
  //     batasBawah: "",
  //   };
  //   setVariableForm([...variableForm, newFormVariable]);
  // };

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
      setDataMesinById(result);
      let arr = [];
      arr = result?.subMachines?.map((item) => {
        return {
          subMachineId: item?.subMachine?.id,
          parameters: [
            item?.subMachine?.parameters?.map((item) => {
              return {
                parameterId: item.id,
                interval: item.interval,
                frequencyTypeId: item.frequency.id,
              };
            }),
          ],
        };
      });
      setSubMesinDetail(arr);
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
        setVariableDetail(
          result.uom.map((item) => ({
            uomId: item.uom_id,
            upperLimit: item.upper_limit,
            lowerLimit: item.lower_limit,
          }))
        );
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
    const arrCheckData = (
      subMesinDetail.length
        ? subMesinDetail.map((item) =>
            !!!item.subMachineId
              ? false
              : item.parameters?.map((item) =>
                  !!!item.parameterId ||
                  !!!item.interval ||
                  !!!item.frequencyTypeId
                    ? false
                    : true
                )
          )
        : [false]
    ).flat();
    let checkData = true;
    arrCheckData.map((item) => {
      if (item && checkData) {
        checkData = true;
      } else {
        checkData = false;
      }
    });
    if (checkData) {
      setIsLoadingData(true);
      setMessage(null);
      try {
        const result = await mesinRepository.create(
          Mesin.create({
            name: data.name,
            machine_no: data.machine_no,
            section_id: data.section,
            photo: data.photo,
            subMachines: JSON.stringify(subMesinDetail),
          })
        );

        setTimeout(() => {
          setIsLoadingData(false);
          navigate("../");
        }, 500);
      } catch (error) {
        setTimeout(() => {
          setIsLoadingData(false);
          setMessage("Nomor Mesin Harus Unik !");
        }, 500);
        throw new Error(error);
      }
    }
  };

  //edit  data
  const editMesin = async (data) => {
    console.log(data);

    // setIsLoadingData(true);
    // try {
    //   const result = await mesinRepository.edit(
    //     Mesin.create({
    //       id: id,
    //       name: data.name,
    //       machine_no: data.machine_no,
    //       section_name: data.section_name,
    //       section_id: data.section_id,
    //       photo: data.photo,
    //     })
    //   );

    //   setTimeout(() => {
    //     setIsLoadingData(false);
    //     navigate("../");
    //   }, 500);
    // } catch (error) {
    //   throw new Error(error);
    // }
  };

  const createSubmesin = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await subMesinRepository.create(
        SubMesin.create({
          id: data.id,
          name: data.name,
          no: data.sub_mechine_no,
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoadingData(false);
        setMessage("No Sub-Mesin Harus Unik!");
      }, 500);
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
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoadingData(false);
        setMessage("Deskripsi Harus terlalu pendek");
      }, 500);
      throw new Error(error);
    }
  };

  const createParameter = async (data) => {
    setIsLoadingData(true);
    setMessage(null);

    try {
      const result = await parameterRepository.create(
        Parameter.create({
          indicator: data.indicator,
          name: data.name,
          variable: data.variable,
          uom: variableDetail,
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

  const editSubmesin = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await subMesinRepository.edit(
        SubMesin.create({
          id: id,
          name: data.name,
          no: data.no,
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
          id: id,
          name: data.name,
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

  const editParameter = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    console.log(data, "mesin-data-model");

    try {
      const result = await parameterRepository.edit(
        Parameter.create({
          id: id,
          indicator: data.indicator,
          name: data.name,
          variable: data.variable,
          uom: variableDetail,
        })
      );
      console.log(result, "mesin-result-model");
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const editUom = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await uomRepository.edit(
        UnitOfMeasure.create({
          id: id,
          name: data.name,
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
    getDataFrequency();
    getDataSection();
  }, []);

  useEffect(() => {
    if (type == "mesin") {
      getDataMesin();
    } else if (type == "sub-mesin") {
      getDataSubMesin();
    } else if (type == "parameter") {
      getDataParameter();
    } else if (type == "indikator") {
      getDataIndikator();
    } else {
      getDataUom();
    }
  }, [type]);

  useEffect(() => {
    if (!!id && type == "mesin") {
      getDataMesinById(id);
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

  return {
    state,
    searchParams,
    urlParams,
    errors,
    type,
    maxDesc,
    isLoadingData,
    isSeclectVar,
    message,
    isSuccess,
    id,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    dataMesin,
    dataSubMesin,
    dataParameter,
    dataIndikator,
    dataUom,
    dataId,
    dataSection,
    dataSubmesinById,
    dataMesinById,
    dataUomById,
    dataIndikatorById,
    dataParameterById,
    dataFrequency,
    subMesinDetail,
    navigate,
    register,
    handleSubmit,
    setMaxDesc,
    setSearchParams,
    setUrlParams,
    createMesin,
    createSubmesin,
    createIndikator,
    createParameter,
    createUom,
    editMesin,
    editSubmesin,
    editUom,
    editParameter,
    editIndikator,
    deleteMesin,
    deleteSubmesin,
    deleteIndikator,
    deleteParameter,
    deleteUom,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    setDataId,
    getDataSubmesinById,
    getDataMesinById,
    getDataSection,
    getDataIndikatorById,
    getDataParameterById,
    getDataUomById,
    getDataFrequency,
    addFieldParameter,
    addFormSubmesin,
    addFormVariable,
    removeFormSubmesin,
    removeFieldParameter,
    FormChangeSubmesin,
    setValueSubMachine,
    setValueInterval,
    setValueParameter,
    setValueFrequency,
    valueStatusChange,
    variableDetail,
    setValueUom,
    setValueUpperLimit,
    setValueLowerrLimit,
  };
}
