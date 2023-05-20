import { DepartemenApiRepository } from "@data/api/location/departemen-api-repository";
import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { Departemen } from "@domain/models/location/departemen";
import { Section } from "@domain/models/location/section";
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
  const { type, id } = useParams();

  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();

  //state data departemen by id
  const [dataDepartemenById, setDataDepartemenById] = useState(null);

  //state data section by id
  const [dataSectionById, setDataSectionById] = useState(null);

  //state message from api
  const [message, setMessage] = useState(null);
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name:
        type == "departemen" ? dataDepartemenById?.name : dataSectionById?.name,
      department_id: dataSectionById?.department_id,
      section_id: dataDepartemenById?.section_id,
    },
  });

  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //api authenticationRepository
  const DepartemenRepository = new DepartemenApiRepository();

  const SectionRepository = new SectionApiRepository();

  //state data departemen
  const [dataDepartemen, setDataDepartemen] = useState<Departemen[]>([]);

  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state data checkbox
  const [isChecked, setIsChecked] = useState(false);

  // get data departemen
  const getDataDepartemen = async () => {
    setIsLoadingData(true);
    try {
      const result = await DepartemenRepository.getDepartement();
      setTimeout(() => {
        setDataDepartemen(result);
        setIsLoadingData(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data section
  const getDataSection = async () => {
    setIsLoadingData(true);
    try {
      const result = await SectionRepository.getSection();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSection(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  //get data byID Departemen
  const getDataDepartemenById = async (id: string) => {
    try {
      const result = await DepartemenRepository.getDataById(id);

      setTimeout(() => {
        setDataDepartemenById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  // get data by ID section
  const getDataSectionById = async (id: string) => {
    try {
      const result = await SectionRepository.getDataById(id);
      setTimeout(() => {
        setDataSectionById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  //create data section
  const createDataSection = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await SectionRepository.create(
        Section.create({
          id: data.id,
          name: data.name,
          department_id: data.department_id,
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

  //create data departemen
  const createDataDepartemen = async (data) => {
    try {
      const result = await DepartemenRepository.create(
        Departemen.create({
          //id: data.id,
          name: data.name,
          section: data.section_id,
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

  //edit data Section
  const editDataSection = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await SectionRepository.edit(
        Section.create({
          id: id,
          name: data.name,
          department_id: data.department_id,
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

  //edit data Departemen
  const editDataDepartemen = async (data) => {
    setIsLoadingData(true);

    try {
      const result = await DepartemenRepository.edit(
        Departemen.create({
          id: data.id,
          name: data.name,
          section: data.section_id,
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

  //delete data section
  const deleteDataSection = async (id: string, setIsLoading) => {
    try {
      const result = await SectionRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataSection();
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

  //delete data departemen
  const deleteDataDepartemen = async (id: string, setIsLoading) => {
    try {
      const result = await DepartemenRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataDepartemen();
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
    getDataDepartemen();
    getDataSection();
  }, []);

  useEffect(() => {
    if (type == "departemen") {
      getDataDepartemen();
      setDataSection([]);
    } else {
      getDataSection();
      setDataDepartemen([]);
    }
  }, [type]);

  useEffect(() => {
    if (!!id && type == "departemen") {
      getDataDepartemenById(id);
    } else if (!!id && type == "section") {
      getDataSectionById(id);
    }
  }, [id, type]);

  return {
    state,
    type,
    errors,
    navigate,
    register,
    dataId,
    setDataId,
    id,
    isSuccess,
    searchParams,
    setSearchParams,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    dataDepartemen,
    dataDepartemenById,
    dataSection,
    isLoadingData,
    getDataDepartemenById,
    getDataSectionById,
    createDataSection,
    createDataDepartemen,
    editDataSection,
    editDataDepartemen,
    deleteDataSection,
    deleteDataDepartemen,
  };
}
