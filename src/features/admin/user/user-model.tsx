import { UserApiRepository } from "@data/api/user/user-api-repository";
import { DefaultResponse } from "@domain/models/default-response";
import { User } from "@domain/models/user/user";
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
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [dataId, setDataId] = useState(null);
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

  const createUser = async (data) => {
    setIsLoadingData(true);
    console.log(data, "cek-model");
    try {
      const result = await userRepository.create(
        User.create({
          email: data.email,
          fullname: data.fullname,
          role: data.role,
          avatarPath: data.avatarPath,
        })
      );
      console.log(result, "cekres");

      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsLoadingData(false);
      }, 500);
      throw new Error(error);
    }
  };

  const editUser = async (data) => {
    setIsLoadingData(true);

    try {
      const result = await userRepository.create(
        User.create({
          id: idUser,
          email: data.email,
          fullname: data.fullname,
          role: data.role,
          avatarPath: data.avatarPath,
        })
      );

      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsLoadingData(false);
      }, 500);
      throw new Error(error);
    }
  };

  const deleteUser = async (id: string, setIsLoading) => {
    try {
      const result = await userRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataUser();
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

  // const editPassword = async (id: string, form) => {
  //   try {
  //     const result = await userRepository.editPassword(id);
  //     getDataUser();
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  const onPreviewPhotoOpen = () => {
    setOpenModalPreviewPhoto(true);
  };

  const onPreviewPhotoClose = () => {
    setOpenModalPreviewPhoto(false);
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
    setOpenModalConfirm(false);
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
      email: dataUserById?.email,
      fullname: dataUserById?.fullname,
      role: dataUserById?.role,
      avatarPath: dataUserById?.avatarPath,
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

  useEffect(() => {
    if (!!!Number(page)) {
      navigate(`../user/:page`);
    }
  }, []);

  return {
    imageRef,
    roleActive,
    openModalPreviewPhoto,
    openModalFilter,
    openModalDelete,
    openModalPassword,
    openModalConfirm,
    openModalSuccess,
    setOpenModalConfirm,
    setOpenModalSuccess,
    setOpenModalDelete,
    setDataId,
    onConfirmClose,
    onFilterOpen,
    onFilterClose,
    onDeleteOpen,
    onDeleteClose,
    onPasswordOpen,
    onPasswordClose,
    onPreviewPhotoOpen,
    onPreviewPhotoClose,
    onDeleteImageUpdate,
    onResetImageUpdate,
    register,
    handleSubmit,
    watch,
    message,
    errors,
    isLoadingData,
    isSuccess,
    navigate,
    dataUser,
    dataUserById,
    dataId,
    createUser,
    editUser,
    deleteUser,
    idUser,
  };
}
