import { MaterialApiRepository } from "@data/api/material/material-api-repository";
import { Material } from "@domain/models/material/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function useMaterialDataModel() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [openModalFilter, setOpenModalFilter] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const [dataMaterial, setDataMaterial] = useState<Material[]>([]);
  const [dataMaterialById, setDataMaterialById] = useState(null);

  const materialRepository = new MaterialApiRepository();

  const [isLoadingData, setIsLoadingData] = useState(true);

  const [message, setMessage] = useState(null);

  const [dataId, setDataId] = useState(null);

  const [isSuccess, setIsSuccess] = useState(false);

  const getDataMaterial = async () => {
    setIsLoadingData(true);
    try {
      const result = await materialRepository.getDataMaterial();
      setTimeout(() => {
        setDataMaterial(result);
        setIsLoadingData(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async (id: string) => {
    try {
      const result = await materialRepository.getDataById(id);

      setTimeout(() => {
        setDataMaterialById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const createMaterial = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await materialRepository.create(
        Material.create({
          materialNumber: data.materialNumber,
          materialDescription: data.materialDescription,
          machineId: data.machineId,
        })
      );

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

  const editMaterial = async (data) => {
    setIsLoadingData(true);

    try {
      const result = await materialRepository.edit(
        Material.create({
          id: id,
          materialNumber: data.materialNumber,
          materialDescription: data.materialDescription,
          machineId: data.machineId,
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

  const deleteMaterial = async (id: string, setIsLoading) => {
    try {
      const result = await materialRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataMaterial();
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      materialNumber: dataMaterialById?.materialNumber,
      materialDescription: dataMaterialById?.materialDescription,
      machineId: dataMaterialById?.machineId,
    },
  });

  useEffect(() => {
    setMessage(null);
    getDataMaterial();
  }, []);

  useEffect(() => {
    if (!!id) {
      getDataById(id);
    }
  }, [id]);

  return {
    navigate,
    openModalFilter,
    openModalConfirm,
    openModalDelete,
    openModalSuccess,
    setOpenModalFilter,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    dataMaterial,
    dataMaterialById,
    message,
    id,
    register,
    handleSubmit,
    errors,
    dataId,
    isLoadingData,
    isSuccess,
    setIsLoadingData,
    setIsSuccess,
    setDataId,
    onFilterOpen,
    onFilterClose,
    createMaterial,
    editMaterial,
    deleteMaterial,
  };
}
