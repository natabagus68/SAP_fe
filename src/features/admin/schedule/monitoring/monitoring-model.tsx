import { MonitoringApiRepository } from "@data/api/schedule/monitoring/monitoring-api-repository";
import { Monitoring } from "@domain/models/schedule/monitoring/monitoring";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useMonitoring() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //state data Monitoring
  const [dataMonitoring, setDataMonitoring] = useState<Monitoring[]>([]);
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
    setDataMonitoring([]);
    try {
      const result = await monitoringRepository.get();
      setTimeout(() => {
        setDataMonitoring(result);
      }, 500);
      setIsLoadingData(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    // setDataTraceability([
    //   {
    //     id: 1,
    //     tipeMaintenance: "Checklist",
    //     departemen: "Profile",
    //     section: "Produksi 01",
    //     line: "01",
    //     noMesin: "SR-12345",
    //     pelaksana: "Bramantra Putra",
    //   },
    //   {
    //     id: 2,
    //     tipeMaintenance: "Preventive",
    //     departemen: "Profile",
    //     section: "Produksi 02",
    //     line: "02",
    //     noMesin: "RS-12345",
    //     pelaksana: "Cendani Arum",
    //   },
    // ]);
  }, []);

  return {
    state,
    openModalConfirm,
    openModalSuccess,
    isLoadingData,
    dataMonitoring,
    onOpenDetail,
    onOpenBack,
    setOpenModalConfirm,
    setOpenModalSuccess,
    getDataMonitoring,
  };
}
