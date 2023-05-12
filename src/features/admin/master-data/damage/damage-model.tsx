import { DamageApiRepository } from "@data/api/damage/damage-api-repository";
import { Damage } from "@domain/models/damage/damage";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function useDamage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: state?.data?.id,
      damage: state?.data?.damage,
    },
  });
  //state & default data url params
  // const [urlParams, setUrlParams] = useState({
  //   type: "damage",
  // });

  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //api authenticationRepository
  const damageRepository = new DamageApiRepository();
  //state data manpower
  const [dataDamage, setDataDamage] = useState<Damage[]>([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  // create manpower data
  const createDamage = (data) => {
    console.log(data);
  };

  // get data manpower
  const getDataDamage = async () => {
    setIsLoadingData(true);
    try {
      const result = await damageRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataDamage(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataDamage();
  }, []);

  return {
    state,
    searchParams,
    // urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    setSearchParams,
    // setUrlParams,
    navigate,
    createDamage,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    dataDamage,
    isLoadingData,
  };
}
