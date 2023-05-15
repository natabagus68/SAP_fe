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
  const { type, manpowerId } = useParams();
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
  //state data manpower by id
  const [dataManpowerById, setDataManpowerById] = useState(null);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  // create manpower data
  const createManpower = async (data) => {
    try {
      const result = await manpowerRepository.create(
        Manpower.create({
          name: data.name,
          employee_no: data.nip,
          section_id: data.section,
          position_id: data.posisi,
          departemen_id: data.departemen,
        })
      );
      console.log(result);
    } catch (error) {
      throw new Error(error);
    }
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
      throw new Error(error);
    }
  };
  // get data manpower
  const getDataManpowerById = async (id: string) => {
    try {
      const result = await manpowerRepository.getDataById(id);
      setTimeout(() => {
        setDataManpowerById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (type == "manpower") {
      getDataManpower();
    } else {
      setDataManpower([]);
    }
  }, [type]);
  useEffect(() => {
    if (!!manpowerId) {
      getDataManpowerById(manpowerId);
    }
  }, [manpowerId]);

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
    dataManpowerById,
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
