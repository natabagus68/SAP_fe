import { UomApiRepository } from "@data/api/mesin/uom-api-repository";
import SparepartAvailabilityApiRepository from "@data/api/sparepart/sparepart-abailability-api-repository";
import { SparepartInventoryApiRepository } from "@data/api/sparepart/sparepart-inventory-api-repository";
import { SparepartKategoryApiRepository } from "@data/api/sparepart/sparepart-kategory-api-repository";
import { SparepartApiRpository } from "@data/api/sparepart/sparepart-part-api-repository";
import { UnitOfMeasure } from "@domain/models/mesin/uom";
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
import moment from "moment";

export default function useSparepart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { type, id } = useParams();
  //setup url params
  const [searchParams, setSearchParams] = useSearchParams();
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

  //api uom
  const uomRepository = new UomApiRepository();
  //state for uom
  const [dataUom, setDataUom] = useState<UnitOfMeasure[]>([]);

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

  //state message from api
  const [message, setMessage] = useState(null);

  //state data sparepart by id
  const [dataSparepartById, setDataSparepartById] = useState(null);

  // create sparepart data
  const createSparepart = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await partSparepartRepository.create(
        SparepartPart.create({
          part_no: data.partNo,//
          item_code: data.itemCode,
          part_name: data.name,
          status: data.status,//
          brand: data.brand,
          spec: data.spec,
          qty_stock: data.qtyStock,
          minimum_stock: data.minimumStock,
          price: data.price,
          vendor_name: data.vendorName,
          procurement_type: data.procurementType,
          remark: data.remark,
          maintenance_rate: data.maintenanceRate,
          description: data.description,
          sparepart_image: data.sparepartImage,
          drawing_image: data.drawingImage,
          alternative_part_id: data.alternativePartId,
          delivery_time: data.deliveryTime,
          arrival_warranty: data.arrivalWarranty,
          usage_warranty: data.usageWarranty,
          category_id: data.categoryId,
          availability_id: data.availabilityId,
          inventory_id: data.inventoryId,
          uom_id: data.uomId
        })
      );
      setTimeout(() => {
        setIsLoadingData(false);
        // navigate("../");
      }, 500);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsLoadingData(false);
        setMessage("No. Induk Pegawai harus unik!");
      }, 500);
      throw new Error(error);
    }
  };

  // get data sparepart
  const getDataSparepart = async () => {
    setIsLoadingData(true);
    setDataSparepart([]);
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

  // get data sparepart / part
  const getDataSparepartById = async (id: string) => {
    try {
      const result = await partSparepartRepository.getDataById(id);
      setTimeout(() => {
        setDataSparepartById(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  // get data sparepart-inventory
  const getDataSparepartInventory = async () => {
    setIsLoadingData(true);
    setDataSparepartInventory([]);
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

  // get data sparepart
  const getDataSparepatAvailability = async () => {
    setIsLoadingData(true);
    setDataSparepartAvailability([]);
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
    setDataSparepartKategory([]);
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

  // get data Uom
  const getDataUom = async () => {
    try {
      const result = await uomRepository.get();
      setTimeout(() => {
        setDataUom(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      inventoryId: dataSparepartById?.inventory_id,
      categoryId: dataSparepartById?.category_id,
      itemCode: dataSparepartById?.item_code,
      availabilityId: dataSparepartById?.availability_id,
      partNo: dataSparepartById?.part_no,
      name: dataSparepartById?.part_name,
      brand: dataSparepartById?.brand,
      spec: dataSparepartById?.spec,
      uomId: dataSparepartById?.uom_id,
      maintenanceRate: dataSparepartById?.maintenance_rate,
      vendorName: dataSparepartById?.vendor_name,
      price: dataSparepartById?.price,
      description: dataSparepartById?.description,
      qtyStock: dataSparepartById?.qty_stock,
      minimumStock: dataSparepartById?.minimum_stock,
      procurementType: dataSparepartById?.procurement_type,
      remark: dataSparepartById?.remark,
      alternativePartId: dataSparepartById?.alternative_part_id,
      deliveryTime: dataSparepartById?.delivery_time,
      arrivalWarranty: moment(dataSparepartById?.arrival_warranty).format("YYYY-MM-DD"),
      usageWarranty: moment(dataSparepartById?.usage_warranty).format("YYYY-MM-DD"),
      status: dataSparepartById?.status,
      sparepartImage: dataSparepartById?.sparepart_image,
      drawingImage: dataSparepartById?.drawing_image,
    },
  });

  useEffect(() => {
    getDataSparepart();
    getDataSparepartKategory();
    getDataSparepatAvailability();
    getDataSparepartInventory();
    getDataUom();
  }, []);
  useEffect(() => {
    if (type == "kategory-sparepart") {
      getDataSparepartKategory();
    } else if (type == "kategory-inventory") {
      getDataSparepartInventory();
    } else if (type == "part") {
      getDataSparepart();
    } else if (type == "availability") {
      getDataSparepatAvailability();
    }
  }, [type]);
  useEffect(() => {
    if (!!id && type == "part") {
      getDataSparepartById(id);
    }
  }, [id, type]);

  return {
    state,
    searchParams,
    urlParams,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    type,
    dataSparepartKategory,
    isLoadingData,
    dataSparepartInventory,
    dataSparepart,
    dataSparepartAvailability,
    dataSparepartById,
    dataUom,
    id,
    setSearchParams,
    setUrlParams,
    navigate,
    createSparepart,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
  };
}
