import SparepartAvailabilityApiRepository from "@data/api/sparepart/sparepart-abailability-api-repository";
import { SparepartInventoryApiRepository } from "@data/api/sparepart/sparepart-inventory-api-repository";
import { SparepartKategoryApiRepository } from "@data/api/sparepart/sparepart-kategory-api-repository";
import { SparepartApiRpository } from "@data/api/sparepart/sparepart-part-api-repository";
import { SparepartAvailability } from "@domain/models/sparepart/sparepart-availability";
import { SparepartInventory } from "@domain/models/sparepart/sparepart-inventory";
import { SparepartKategory } from "@domain/models/sparepart/sparepart-kategory";
import { SparepartPart } from "@domain/models/sparepart/sparepart-part";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function useSparepart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      stock: state?.data?.stock,
      itemCode: state?.data?.itemCode,
      availability: state?.data?.availibility,
      rak: state?.data?.rak,
      partNo: state?.data?.partNo,
      partName: state?.data?.partName,
      brand: state?.data?.brand,
      specification: state?.data?.specification,
      uom: state?.data?.uom,
      typeKategory: state?.data?.typeKategory,
      vendor: state?.data?.vendor,
      cost: state?.data?.cost,
      pengadaan: state?.data?.pengadaan,
      remark: state?.data?.remark,
      alternativePart: state?.data?.alternativePart,
      minStok: state?.data?.minStok,
      deliveryTime: state?.data?.deliveryTime,
      maintenceRate: state?.data?.maintenceRate,
      description: state?.data?.description,
      kategory: state?.data?.kategory,
      garansiDatang: state?.data?.garansiDatang,
      garansiPakai: state?.data?.garansiPakai,
      status: state?.data?.status,
      gambarPart: state?.data?.gambarPart,
      drawing: state?.data?.drawing,
      iconKategory: state?.data?.iconKategory,
      id: state?.data?.id,
    },
  });
  //state & default data url params
  const [urlParams, setUrlParams] = useState({
    type: "sparepart",
  });
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  //api authenticationRepository
  const kategorySparepartRepository = new SparepartKategoryApiRepository();

  const inventorySparepartRepository = new SparepartInventoryApiRepository();

  const partSparepartRepository = new SparepartApiRpository();

  const availabilitySparepartRepository =
    new SparepartAvailabilityApiRepository();

  //state data sparepat

  const [dataSparepart, setDataSparepart] = useState<SparepartPart[]>([]);

  const [dataSparepartAvailability, setDataSparepartAvailability] = useState<
    SparepartAvailability[]
  >([]);

  const [dataSparepartInventory, setDataSparepartInventory] = useState<
    SparepartInventory[]
  >([]);

  const [dataSparepartKategory, setDataSparepartKategory] = useState<
    SparepartKategory[]
  >([]);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  // create sparepart data
  const createSparepart = (data) => {
    console.log(data);
  };

  // get data sparepart
  const getDataSparepart = async () => {
    setIsLoadingData(true);
    try {
      const result = await partSparepartRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSparepart(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data sparepart
  const getDataSparepatAvailability = async () => {
    setIsLoadingData(true);
    try {
      const result = await availabilitySparepartRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSparepartAvailability(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data sparepart-kategory
  const getDataSparepartKategory = async () => {
    setIsLoadingData(true);
    try {
      const result = await kategorySparepartRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSparepartKategory(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // get data sparepart-inventory
  const getDataSparepartInventory = async () => {
    setIsLoadingData(true);
    try {
      const result = await inventorySparepartRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataSparepartInventory(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type == "kategory-sparepart") {
      getDataSparepartKategory();
    } else if (type == "kategory-inventory") {
      getDataSparepartInventory();
    } else if (type == "part") {
      getDataSparepart();
    } else if (type == "availability") {
      getDataSparepatAvailability();
    } else {
      setDataSparepartKategory([]);
      setDataSparepartInventory([]);
      setDataSparepart([]);
      setDataSparepartAvailability([]);
    }
  }, [type]);

  return {
    state,
    searchParams,
    urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    setSearchParams,
    setUrlParams,
    navigate,
    createSparepart,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    dataSparepartKategory,
    isLoadingData,
    dataSparepartInventory,
    dataSparepart,
    dataSparepartAvailability,
  };
}
