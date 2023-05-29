import { MonitoringApiRepository } from "@data/api/schedule/monitoring/monitoring-api-repository";
import { DefaultResponse } from "@domain/models/default-response";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function useMonitoring() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { page } = useParams();
  
  //state data Monitoring
  const [dataMonitoring, setDataMonitoring] = useState<DefaultResponse>(
    DefaultResponse.create({
      success: false,
      message: "",
      data: [],
    })
  );
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //api monitoring
  const monitoringRepository = new MonitoringApiRepository();

  //click detail data
  const onOpenDetail = (type): void => {
    navigate("detail", {
      state: {
        type: type,
      },
    });
  };
  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };
  // get data Monitoring
  const getDataMonitoring = async () => {
    setIsLoadingData(true);
    setDataMonitoring(null);
    try {
      const result = await monitoringRepository.get(
        !!Number(page) ? Number(page) : 1,
        5,
        ""
      );
      setTimeout(() => {
        setDataMonitoring(result);
      }, 500);
      setIsLoadingData(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    state,
    openModalConfirm,
    openModalSuccess,
    isLoadingData,
    dataMonitoring,
    page,
    onOpenDetail,
    onOpenBack,
    setOpenModalConfirm,
    setOpenModalSuccess,
    getDataMonitoring,
    navigate
  };
}
