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

  // create sparepart data
  const createSparepart = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // console.log(2);
  }, []);

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
  };
}
