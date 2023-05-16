import { DamageApiRepository } from "@data/api/damage/damage-api-repository";
import { Damage } from "@domain/models/damage/damage";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function useDamage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { damageId } = useParams();
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

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  //api authenticationRepository
  const damageRepository = new DamageApiRepository();
  //state data manpower
  const [dataDamage, setDataDamage] = useState<Damage[]>([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  // create damage data
  const createDamage = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await damageRepository.create(
        Damage.create({
          id: data.id,
          type: data.type,
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

  // get data damage
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

  //edit damage data
  const editDamage = async (data) => {
    setIsLoadingData(true);
    try {
      const result = await damageRepository.edit(
        Damage.create({
          id: damageId,
          type: data.type,
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

  // detele data damage
  const deleteDataDamage = async (id: string, setIsLoading) => {
    try {
      const result = await damageRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataDamage();
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
    isSuccess,
    editDamage,
    damageId,
    dataId,
    setDataId,
    deleteDataDamage,
  };
}
