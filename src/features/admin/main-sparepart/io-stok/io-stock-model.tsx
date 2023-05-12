import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function useIoStock() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //get params url
  const { type } = useParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "",
      name: "",
      quantity: "",
    },
  });
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  //state data transaction
  const [dataTransaction, setDataTransaction] = useState({});

  // create manpower data
  const createTransaction = (data) => {
    setOpenModalConfirm(true);
    setDataTransaction(data)
    // console.log(data);
  };

  useEffect(() => {
    // console.log(2);
  }, []);

  return {
    state,
    errors,
    type,
    openModalConfirm,
    openModalSuccess,
    dataTransaction,
    navigate,
    createTransaction,
    register,
    handleSubmit,
    setOpenModalConfirm,
    setOpenModalSuccess,
  };
}
