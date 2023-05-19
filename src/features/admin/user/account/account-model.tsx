import { ManpowerApiRepository } from "@data/api/manpower/manpower-api-repository";
import { AccessApiRepository } from "@data/api/user/access-api-repository";
import { AccountApiRepository } from "@data/api/user/account-api-repository";
import { Manpower } from "@domain/models/manpower/manpower";
import { Access } from "@domain/models/user/access";
import { Account } from "@domain/models/user/account";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function useAccount() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { AccountId } = useParams();

  //state data Account
  const [dataAccount, setDataAccount] = useState<Account[]>([]);

  //state account by id
  const [dataAccountById, setDataAccountById] = useState(null);

  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      id: dataAccountById?.id,
      employee_id: dataAccountById?.employee_id,
      email: dataAccountById?.email,
      password: dataAccountById?.password,
      role_id: dataAccountById?.role_id,
    },
  });

  //modal Confirmasi
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //modal Delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //modal Success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //api authenticationRepository
  const accountRepository = new AccountApiRepository();

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state message from api
  const [message, setMessage] = useState(null);

  //state success create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  //state data manpower
  const [dataManpower, setDataManpower] = useState<Manpower[]>([]);
  //api data manpower
  const manpowerRepository = new ManpowerApiRepository();

  //state data access
  const [dataAccess, setDataAccess] = useState<Access[]>([]);
  //api data manpower
  const accessRepository = new AccessApiRepository();

  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  //get data Account
  const getDataAccount = async () => {
    setIsLoadingData(true);
    try {
      const result = await accountRepository.getAccount();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataAccount(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  //get data Account by ID
  const getDataAccountById = async (id: string) => {
    try {
      const result = await accountRepository.getDataById(id);
      setTimeout(() => {
        setDataAccountById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  // create account data
  const createAccount = async (data) => {
    setIsLoadingData(true);
    setMessage(null);

    try {
      const result = await accountRepository.create(
        Account.create({
          name: data.name,
          email: data.email,
          employee_id: data.employee_id,
          role_id: data.role_id,
          password: data.password,
          id: data.id,
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

  // edit account data
  const editAccount = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    console.log(data, "edit-data-model");
    try {
      const result = await accountRepository.edit(
        Account.create({
          id: data.id,
          name: data.name,
          email: data.email,
          employee_id: data.employee_id,
          role_id: data.role_id,
          password: data.password,
        })
      );
      console.log(result, "edit-model");

      setTimeout(() => {
        setIsLoadingData(false);
        navigate("../");
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  //delete account
  const deleteAccount = async (id: string, setIsLoading) => {
    try {
      const result = await accountRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataAccount();
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

  //getdata access
  const getDataAccess = async () => {
    try {
      const result = await accessRepository.getAccess();
      setDataAccess(result);
    } catch (error) {
      console.log(error);
    }
  };

  //get data manopower
  const getDataManpower = async () => {
    try {
      const result = await manpowerRepository.get();
      setDataManpower(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataAccount();
    getDataManpower();
    getDataAccess();
  }, []);

  useEffect(() => {
    if (!!AccountId) {
      getDataAccountById(AccountId);
    }
  }, [AccountId]);

  return {
    state,
    navigate,
    dataAccount,
    setDataAccount,
    openModalConfirm,
    setOpenModalConfirm,
    openModalDelete,
    setOpenModalDelete,
    openModalSuccess,
    setOpenModalSuccess,
    //urlParams,
    //setUrlParams,
    createAccount,
    onOpenBack,
    //type,
    handleSubmit,
    register,
    errors,
    AccountId,
    dataId,
    setDataId,
    editAccount,
    deleteAccount,
    dataAccountById,
    isLoadingData,
    message,
    isSuccess,
    dataManpower,
    dataAccess,
  };
}
