import { UomApiRepository } from "@data/api/mesin/uom-api-repository";
import SparepartAvailabilityApiRepository from "@data/api/sparepart/sparepart-abailability-api-repository";
import { SparepartInventoryApiRepository } from "@data/api/sparepart/sparepart-inventory-api-repository";
import { SparepartKategoryApiRepository } from "@data/api/sparepart/sparepart-kategory-api-repository";
import { SparepartApiRpository } from "@data/api/sparepart/sparepart-part-api-repository";
import { UnitOfMeasure } from "@domain/models/mesin/uom";
import { SparepartAvailability } from "@domain/models/sparepart/sparepart-availability";
import {
  ISparepartInventoryProps,
  SparepartInventory,
} from "@domain/models/sparepart/sparepart-inventory";
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
import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { Section } from "@domain/models/location/section";

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

  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);

  //state for parsing data id
  const [dataId, setDataId] = useState(null);

  //state data sparepart by id
  const [dataSparepartById, setDataSparepartById] = useState(null);
  //state data inventory by id
  const [dataInventoryById, setDataInventoryById] = useState(null);
  //state data inventory by id
  const [dataAvailabilityById, setDataAvailabilityById] = useState(null);
  //state data inventory by id
  const [dataCategoryById, setDataCategoryById] = useState(null);
  //repo api section
  const sectionRepository = new SectionApiRepository();
  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

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
  // create sparepart data
  const createSparepart = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await partSparepartRepository.create(
        SparepartPart.create({
          part_no: data.partNo,
          item_code: data.itemCode,
          part_name: data.name,
          status: data.status,
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
          uom_id: data.uomId,
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
        setMessage("Error");
      }, 500);
      throw new Error(error);
    }
  };
  // get data sparepart / part
  const getDataSparepartById = async (id: string) => {
    try {
      const result = await partSparepartRepository.getDataById(id);
      setDataSparepartById(result);
    } catch (error) {
      throw new Error(error);
    }
  };
  // edit sparepart data
  const editSparepart = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await partSparepartRepository.edit(
        SparepartPart.create({
          id: id,
          part_no: data.partNo,
          item_code: data.itemCode,
          part_name: data.name,
          status: data.status,
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
          uom_id: data.uomId,
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
        setMessage("error");
      }, 500);
      throw new Error(error);
    }
  };
  // delete data Sparepart
  const deleteDataSparepart = async (id: string, setIsLoading) => {
    try {
      const result = await partSparepartRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataSparepart();
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
  // create Inventory data
  const createInventory = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await inventorySparepartRepository.create(
        SparepartInventory.create({
          name: data.name,
          icon: data.categoryId,
          status: data.status ? "active" : "inactive",
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
        setMessage("Error");
      }, 500);
      throw new Error(error);
    }
  };
  // get data inventory by id
  const getDataInventoryById = async (id: string) => {
    try {
      const result = await inventorySparepartRepository.getDataById(id);
      setDataInventoryById(result);
    } catch (error) {
      throw new Error(error);
    }
  };
  // edit Inventory data
  const editInventory = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await inventorySparepartRepository.edit(
        SparepartInventory.create({
          id: id,
          name: data.name,
          icon: data.categoryId,
          status: data.status ? "active" : "inactive",
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
        setMessage("error");
      }, 500);
      throw new Error(error);
    }
  };
  // delete data inventory
  const deleteDataInventory = async (id: string, setIsLoading) => {
    try {
      const result = await inventorySparepartRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataSparepartInventory();
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

  // get data Availability
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
  // create Availability data
  const createAvailability = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await availabilitySparepartRepository.create(
        SparepartAvailability.create({
          rack_code: data.name,
          section_id: data.availabilityId,
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
        setMessage("Error");
      }, 500);
      throw new Error(error);
    }
  };
  // get data Availability by id
  const getDataIAvailabilityById = async (id: string) => {
    try {
      const result = await availabilitySparepartRepository.getDataById(id);
      setDataAvailabilityById(result);
    } catch (error) {
      throw new Error(error);
    }
  };
  // edit Availability data
  const editAvailability = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await availabilitySparepartRepository.edit(
        SparepartAvailability.create({
          id: id,
          rack_code: data.name,
          section_id: data.availabilityId,
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
        setMessage("error");
      }, 500);
      throw new Error(error);
    }
  };
  // delete data Availability
  const deleteDataAvailability = async (id: string, setIsLoading) => {
    try {
      const result = await availabilitySparepartRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataSparepatAvailability();
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
  // create Category data
  const createCategory = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await kategorySparepartRepository.create(
        SparepartKategory.create({
          name: data.name,
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
        setMessage("Error");
      }, 500);
      throw new Error(error);
    }
  };
  // get data Category by id
  const getDataCategoryById = async (id: string) => {
    try {
      const result = await kategorySparepartRepository.getDataById(id);
      setDataCategoryById(result);
    } catch (error) {
      throw new Error(error);
    }
  };
  // edit Category data
  const editCategory = async (data) => {
    setIsLoadingData(true);
    setMessage(null);
    try {
      const result = await kategorySparepartRepository.edit(
        SparepartKategory.create({
          id: id,
          name: data.name,
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
        setMessage("error");
      }, 500);
      throw new Error(error);
    }
  };
  // delete data Category
  const deleteDataCategory = async (id: string, setIsLoading) => {
    try {
      const result = await kategorySparepartRepository.delete(id);
      setIsSuccess(true);
      setTimeout(() => {
        getDataSparepartKategory();
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

  // get data section
  const getDataSection = async () => {
    try {
      const result = await sectionRepository.getSection();
      setDataSection(result);
    } catch (error) {
      console.log(error);
    }
  };

  // get data Uom
  const getDataUom = async () => {
    try {
      const result = await uomRepository.get();
      setDataUom(result);
    } catch (error) {
      console.log(error);
    }
  };

  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    values: {
      inventoryId: dataSparepartById?.inventory_id,
      categoryId:
        type == "part"
          ? dataSparepartById?.category_id
          : type == "kategory-inventory"
          ? dataInventoryById?.icon
          : undefined || "mechanical",
      itemCode: dataSparepartById?.item_code,
      availabilityId:
        type == "part"
          ? dataSparepartById?.availability_id
          : type == "availability"
          ? dataAvailabilityById?.section_id
          : undefined,
      partNo: dataSparepartById?.part_no,
      name:
        type == "part"
          ? dataSparepartById?.part_name
          : type == "kategory-inventory"
          ? dataInventoryById?.name
          : type == "availability"
          ? dataAvailabilityById?.rack_code
          : type == "kategory-sparepart"
          ? dataCategoryById?.name
          : undefined,
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
      arrivalWarranty: moment(dataSparepartById?.arrival_warranty).format(
        "YYYY-MM-DD"
      ),
      usageWarranty: moment(dataSparepartById?.usage_warranty).format(
        "YYYY-MM-DD"
      ),
      status:
        type == "part"
          ? dataSparepartById?.status
          : type == "kategory-inventory"
          ? dataInventoryById?.status == "active"
            ? true
            : false
          : false,
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
    getDataSection();
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
    } else if (!!id && type == "kategory-inventory") {
      getDataInventoryById(id);
    } else if (!!id && type == "availability") {
      getDataIAvailabilityById(id);
    } else if (!!id && type == "kategory-sparepart") {
      getDataCategoryById(id);
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
    isSuccess,
    dataId,
    dataInventoryById,
    dataSection,
    setSearchParams,
    setUrlParams,
    navigate,
    createSparepart,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    watch,
    editSparepart,
    deleteDataSparepart,
    setDataId,
    createInventory,
    editInventory,
    deleteDataInventory,
    createAvailability,
    editAvailability,
    deleteDataAvailability,
    createCategory,
    editCategory,
    deleteDataCategory,
  };
}
