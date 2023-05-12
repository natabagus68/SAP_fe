import { LocationApiRepository } from "@data/api/location/location-api-repository";
import { Location } from "@domain/models/location/location";
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

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //api authenticationRepository
  const LocationRepository = new LocationApiRepository();

  //state data departemen
  const [dataDepartemen, setDataDepartemen] = useState<Location[]>([]);

  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  // create location data
  const createLocation = (data) => {
    console.log(data);
  };

  // get data departemen
  const getDataDepartemen = async () => {
    setIsLoadingData(true);
    try {
      const result = await LocationRepository.getDepartement();
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
      const result = await LocationRepository.getDepartement();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSection(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type == "departemen") {
      getDataDepartemen();
    } else if (type == "section") {
      getDataSection();
    } else {
      setDataDepartemen([]);
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
    dataSection,
    isLoadingData,
  };
}
