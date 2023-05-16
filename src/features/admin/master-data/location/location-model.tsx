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
  const { type, departemenId } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //state data departemen by id
  const [dataDepartemenById, setDataDepartemenById] = useState(null);
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      departemen: dataDepartemenById?.name,
      section: dataDepartemenById?.section,
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

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //api authenticationRepository
  const DepartemenRepository = new DepartemenApiRepository();

  const SectionRepository = new SectionApiRepository();

  //state data departemen
  const [dataDepartemen, setDataDepartemen] = useState<Departemen[]>([]);

  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  // create location data
  const createLocation = (data) => {
    console.log(data);
  };

  // get data departemen
  const getDataDepartemen = async () => {
    setIsLoadingData(true);
    try {
      const result = await DepartemenRepository.getDepartement();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataDepartemen(result);
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

  //get data byID
  const getDataDepartemenById = async (id: string) => {
    try {
      const result = await DepartemenRepository.getDataDepartemenById(id);
      setTimeout(() => {
        setDataDepartemenById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (type == "departemen") {
      getDataDepartemen();
      getDataSection();
    } else if (type == "section") {
      getDataSection();
    } else {
      setDataDepartemen([]);
      setDataSection([]);
    }
  }, [type]);

  useEffect(() => {
    if (!!departemenId) {
      getDataDepartemenById(departemenId);
    }
  }, [departemenId]);

  return {
    state,
    searchParams,
    // urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    setSearchParams,
    // setUrlParams,
    navigate,
    createLocation,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    dataDepartemen,
    dataDepartemenById,
    dataSection,
    isLoadingData,
    getDataDepartemenById,
  };
}
