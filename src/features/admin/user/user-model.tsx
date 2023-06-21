import { UserApiRepository } from "@data/api/user/user-api-repository";
import { DefaultResponse } from "@domain/models/default-response";
import { UniqueMessageIdProvider } from "mqtt";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function useUserModel() {
  const navigate = useNavigate();
  const { page, idUser } = useParams();
  const imageRef = useRef(null);
  const [roleActive, setRoleActive] = useState(false);
  const [openModalFilter, setOpenModalFilter] = useState(false);
  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [openModalPreviewPhoto, setOpenModalPreviewPhoto] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const userRepository = new UserApiRepository();

  const [dataUser, setDataUser] = useState<DefaultResponse>(
    DefaultResponse.create({
      success: false,
      message: "",
      data: [],
    })
  );

  const [dataUserById, setDataUserById] = useState(null);

  const [isLoadingData, setIsLoadingData] = useState(true);
  const [message, setMessage] = useState(null);

  const getDataUser = async () => {
    setIsLoadingData(true);
    setDataUser(null);

    try {
      const result = await userRepository.getDataByFilter(
        !!Number(page) ? page : "1",
        "5",
        watch("search")
      );
      setTimeout(() => {
        setDataUser(result);
        setIsLoadingData(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataUserById = async (id: string) => {
    try {
      const result = await userRepository.getDataById(id);
      console.log(result);

      setTimeout(() => {
        setDataUserById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onNavigate = (path) => {
    navigate(path);
  };

  const onPreviewPhotoOpen = () => {
    setOpenModalPreviewPhoto(true);
  };

  const onPreviewPhotoClose = () => {
    setOpenModalPreviewPhoto(false);
  };

  const onActive = () => {
    setRoleActive(true);
  };

  const onInactive = () => {
    setRoleActive(false);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenConfirmModal(true);
  };

  const onDeleteImageUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    imageRef.current.value = "";
  };

  const onResetImageUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    imageRef.current.click();
  };

  const onPasswordOpen = () => {
    setOpenModalPassword(true);
  };

  const onPasswordClose = () => {
    setOpenModalPassword(false);
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      search: "",
    },
  });

  useEffect(() => {
    setMessage(null);
    getDataUser();
  }, []);

  useEffect(() => {
    getDataUser();
  }, [page]);

  useEffect(() => {
    if (!!idUser) {
      getDataUserById(idUser);
    }
  }, [idUser]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getDataUser();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [watch("search")]);

  return {
    imageRef,
    roleActive,
    openModalPreviewPhoto,
    openModalFilter,
    openModalDelete,
    openModalPassword,
    openConfirmModal,
    onNavigate,
    onFormSubmit,
    onConfirmClose,
    onFilterOpen,
    onFilterClose,
    onDeleteOpen,
    onDeleteClose,
    onPasswordOpen,
    onPasswordClose,
    onActive,
    onInactive,
    onPreviewPhotoOpen,
    onPreviewPhotoClose,
    onDeleteImageUpdate,
    onResetImageUpdate,
    register,
    handleSubmit,
    watch,
    message,
    isLoadingData,
    navigate,
    dataUser,
    dataUserById,
  };
}
