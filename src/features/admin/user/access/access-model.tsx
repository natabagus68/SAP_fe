import { AccessApiRepository } from "@data/api/user/access-api-repository";
import { Access } from "@domain/models/user/access";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function useAccess() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { AccessId } = useParams();

  //state access by id
  const [dataAccessById, setDataAccessById] = useState(null);

  //setup react from hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      menu: state?.data?.menu,
      id: dataAccessById?.id,
      role: dataAccessById?.name,
    },
  });

  //modal Accesss
  const [openModalAccess, setOpenModalAccess] = useState(false);
  //modal Confirmasi
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //modal Delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //modal Success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  //api authenticationRepository
  const accessRepository = new AccessApiRepository();

  //state data access
  const [dataAccess, setDataAccess] = useState<Access[]>([]);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state message from api
  const [message, setMessage] = useState(null);

  // //state & default data url params
  // const [urlParams, setUrlParams] = useState({
  //   type: "Access",
  // });

  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  const onOpenBackMenu = (): void => {
    setOpenModalAccess(false);
  };

  //get data access
  const getDataAccess = async () => {
    setIsLoadingData(true);
    try {
      const result = await accessRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataAccess(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  //get data access by id
  const getDataAccessById = async (id: string) => {
    try {
      const result = await accessRepository.getDataById(id);
      setTimeout(() => {
        setDataAccessById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  // create access data
  const createAcccess = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await accessRepository.create(
        Access.create({
          name: data.role,
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

  //edit access data
  const editAccess = async (data) => {
    setIsLoadingData(true);
    console.log(data);
    try {
      const result = await accessRepository.edit(
        Access.create({
          id: data.id,
          name: data.role,
        })
      );
      console.log(result);
      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  //delete damage
  const deleteAccess = async (id: string, setIsLoading) => {
    try {
      const result = await accessRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataAccess();
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
    getDataAccess();
  }, []);

  useEffect(() => {
    if (!!AccessId) {
      getDataAccessById(AccessId);
    }
  }, [AccessId]);

  return {
    navigate,
    state,
    //type,
    dataAccess,
    setDataAccess,
    register,
    handleSubmit,
    errors,
    openModalConfirm,
    setOpenModalConfirm,
    openModalDelete,
    setOpenModalDelete,
    openModalSuccess,
    setOpenModalSuccess,
    onOpenBack,
    //urlParams,
    //setUrlParams,
    openModalAccess,
    setOpenModalAccess,
    onOpenBackMenu,
    createAcccess,
    editAccess,
    deleteAccess,
    dataId,
    setDataId,
    isSuccess,
    AccessId,
  };
}
