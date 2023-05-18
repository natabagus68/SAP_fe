import { InventoryKategoryApiRepository } from "@data/api/inventory/inventory-kategory-api-repository";
import { InventoryKategorySparepartApiRepository } from "@data/api/inventory/inventory-kategory-sparepart-api-repository";
import { InventoryKategoryByIdApiRepository } from "@data/api/inventory/inventory-kategorybyid-api-repository";
import { InventoryKategory } from "@domain/models/inventory/inventory-kategory";
import { InventoryKategorySparepart } from "@domain/models/inventory/inventory-kategory-sparepart";
import { InventoryKategoryById } from "@domain/models/inventory/inventory-kategorybyid";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function useInventory() {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const { state } = useLocation();

  //api authenticationRepository
  const inventoryKategoryRepository = new InventoryKategoryApiRepository();
  const inventoryKategoryByIdRepository = new InventoryKategoryByIdApiRepository();
  const inventoryKategorySparepartRepository = new InventoryKategorySparepartApiRepository();

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //state messageError from api
  const [messageError, setMessageError] = useState(null);

  // state inventory-kategory
  const [dataInventoryKategory, setDataInventoryKategory] = useState<InventoryKategory[]>([])

  // state inventory-bykategory
  const [dataInventoryByKategory, setDataInventoryByKategory] = useState<InventoryKategoryById[]>([])

  // state inventory-kategory-sparepart
  const [dataInventoryKategorySparepart, setDataInventoryKategorySparepart] = useState<InventoryKategorySparepart>(null)

  // get data inventory-kategory
  const getDataInventoryKategory = async () => {
    setIsLoadingData(true);
    setDataInventoryKategory([]);
    try {
      const result = await inventoryKategoryRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataInventoryKategory(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data inventory-kategory
  const getDataInventoryKategoryById = async () => {
    setIsLoadingData(true);
    setDataInventoryByKategory([]);
    try {
      const result = await inventoryKategoryByIdRepository.getDataById(state?.id);
      setTimeout(() => {
        setIsLoadingData(false);
        setDataInventoryByKategory(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data inventory-kategory-sparepart
  const getDataInventoryKategorySparepart = async () => {
    setIsLoadingData(true);
    setDataInventoryKategorySparepart(null);
    try {
      const result = await inventoryKategorySparepartRepository.getDetail(id);
      setTimeout(() => {
        setIsLoadingData(false);
        setDataInventoryKategorySparepart(result);
      }, 500);
    } catch (error) {
      setMessageError(error);
    }
  };

  useEffect(() => {
    getDataInventoryKategory()
  }, []);

  useEffect(() => {

    if (state?.id) {
      getDataInventoryKategoryById()      
    }

    if (id) {
      getDataInventoryKategorySparepart()
    }
    
  }, [id, state?.id])
  

  return {
    navigate,
    dataInventoryKategory,
    dataInventoryByKategory,
    dataInventoryKategorySparepart,
    isLoadingData,
    type,
    messageError
  };
}
