import { MachineApiRepository } from "@data/api/machine/machine-api-repository";
import { DefaultResponse } from "@domain/models/default-response";
import { Machine } from "@domain/models/machine/machine";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function useMasterDataModel() {
  const navigate = useNavigate();
  const { page, id } = useParams();

  const [openModalFilter, setOpenModalFilter] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  //state data machine
  const [dataMachine, setDataMachine] = useState<DefaultResponse>(
    DefaultResponse.create({
      success: false,
      message: "",
      data: [],
    })
  );

  //state data perpage
  const [dataMachineByPage, setDataDamageByPage] = useState([]);

  //state data per id
  const [dataMachineById, setDataMachineById] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: dataMachineById?.name,
      description: dataMachineById?.description,
      machineCode: dataMachineById?.machineCode,
      location: dataMachineById?.location,
    },
  });

  //authentication Machine Repository
  const machineRepository = new MachineApiRepository();

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state message from api
  const [message, setMessage] = useState(null);

  const getDataMachine = async () => {
    setIsLoadingData(true);
    setDataMachine(null);

    try {
      const result = await machineRepository.getDataByFilter(
        !!Number(page) ? page : "1",
        "8"
      );
      setTimeout(() => {
        setDataMachine(result);
        setIsLoadingData(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataMachineByPage = async () => {
    setDataMachine(null);
    try {
      const result = await machineRepository.getDataByFilter();
      setDataDamageByPage(result.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getDataById = async (id: string) => {
    try {
      const result = await machineRepository.getDataById(id);

      setTimeout(() => {
        setDataMachineById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const createMachine = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await machineRepository.create(
        Machine.create({
          name: data.name,
          description: data.description,
          machineCode: data.machineCode,
          location: data.location,
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

  const onNavigate = (path) => {
    navigate(path);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenConfirmModal(true);
  };

  const onDeleteOpen = () => {
    setOpenModalDelete(true);
  };

  const onDeleteClose = () => {
    setOpenModalDelete(false);
  };

  const onConfirmClose = () => {
    setOpenConfirmModal(false);
  };

  const onFilterOpen = () => {
    setOpenModalFilter(true);
  };

  const onFilterClose = () => {
    setOpenModalFilter(false);
  };

  useEffect(() => {
    setMessage(null);
    getDataMachine();
  }, []);

  useEffect(() => {
    getDataMachine();
  }, [page]);

  return {
    openModalFilter,
    openModalDelete,
    openConfirmModal,
    onNavigate,
    onFormSubmit,
    onConfirmClose,
    onFilterOpen,
    onFilterClose,
    onDeleteOpen,
    onDeleteClose,
    dataMachine,
    dataMachineByPage,
    dataMachineById,
    message,
    register,
    handleSubmit,
    isLoadingData,
  };
}
