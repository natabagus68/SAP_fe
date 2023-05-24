import { IoStockApiRepository } from "@data/api/io-stock/io-stock-api-repository";
import { SparepartApiRpository } from "@data/api/sparepart/sparepart-part-api-repository";
import { IoStock } from "@domain/models/io-stock/io-stock";
import { SparepartPart } from "@domain/models/sparepart/sparepart-part";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useNavigate
} from "react-router-dom";

export default function useIoStock() {
  const navigate = useNavigate();

  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "",
      part_id: "",
      qty: "",
    },
  });
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const [isSuccess, setIsSuccess] = useState(true)
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [dataIoStock, setDataIoStock] = useState<IoStock[]>([])

  //state data sparepat
  const [dataSparepart, setDataSparepart] = useState<SparepartPart[]>([]);

  const [formData, setFormData] = useState(null)

  const ioStockApi = new IoStockApiRepository()
  const sparepatApi = new SparepartApiRpository()


  const onsubmit = (data) => {
    setOpenModalConfirm(true)
    setFormData(data)
  }

  // create manpower data
  const createIoStock = async(data) => {    
    try {
      await ioStockApi.create(
        IoStock.create({
          type: data.type,
          qty: data.qty,
          part_id: data.part_id
        })
      )
      setIsSuccess(true)
      navigate('..')
    } catch (error) {
      setIsSuccess(false)
      console.log(error);
      
      throw new Error(error)
    }
  };

  const getIoStock = async () => {
    setIsLoadingData(true);
    try {
      const result = await ioStockApi.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataIoStock(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  // get data sparepart
  const getDataSparepart = async () => {
    setIsLoadingData(true);
    setDataSparepart([]);
    try {
      const result = await sparepatApi.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSparepart(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIoStock()
    getDataSparepart()
  }, []);

  return {
    errors,
    openModalConfirm,
    openModalSuccess,
    navigate,
    createIoStock,
    register,
    handleSubmit,
    setOpenModalConfirm,
    setOpenModalSuccess,
    dataIoStock,
    isLoadingData,
    dataSparepart,
    isSuccess,
    onsubmit,
    formData
  };
}
