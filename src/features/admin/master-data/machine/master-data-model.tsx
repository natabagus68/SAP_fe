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
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //state data machine
  const [dataMachine, setDataMachine] = useState<DefaultResponse>(
    DefaultResponse.create({
      success: false,
      message: "",
      data: [],
    })
  );

  //state data per id
  const [dataMachineById, setDataMachineById] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      name: dataMachineById?.name,
      description: dataMachineById?.description,
      machineCode: dataMachineById?.machineCode,
      location: dataMachineById?.location,
      search: "",
    },
  });

  //authentication Machine Repository
  const machineRepository = new MachineApiRepository();

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state message from api
  const [message, setMessage] = useState(null);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  const getDataMachine = async () => {
    setIsLoadingData(true);
    setDataMachine(null);

    try {
      const result = await machineRepository.getDataByFilter(
        !!Number(page) ? page : "1",
        "5",
        watch("search")
      );
      setTimeout(() => {
        setDataMachine(result);
        setIsLoadingData(false);
      }, 500);
    } catch (error) {
      console.log(error);
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
      console.log(result, "create");

      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoadingData(false);
      }, 500);
      throw new Error(error);
    }
  };

  const editMachine = async (data) => {
    setIsLoadingData(true);

    try {
      const result = await machineRepository.edit(
        Machine.create({
          id: id,
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
      setIsLoadingData(false);
      throw new Error(error);
    }
  };

  const deleteMachine = async (id: string, setIsLoading) => {
    try {
      const result = await machineRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataMachine();
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

  useEffect(() => {
    if (!!id) {
      getDataById(id);
    }
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getDataMachine();
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [watch("search")]);

  useEffect(() => {
    if (!!!Number(page)) {
      navigate(`../mesin/:page`);
    }
  }, []);

  return {
    openModalFilter,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    navigate,
    errors,
    onFilterOpen,
    onFilterClose,
    dataMachine,
    dataMachineById,
    message,
    register,
    handleSubmit,
    isLoadingData,
    id,
    createMachine,
    editMachine,
    deleteMachine,
    getDataById,
    dataId,
    isSuccess,
    setOpenModalDelete,
    setDataId,
    setOpenModalConfirm,
    setOpenModalSuccess,
  };
}
