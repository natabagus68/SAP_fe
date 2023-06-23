import { MonitoringApiRepository } from "@data/api/monitoring/monitoring-api-repository";
import { Monitoring } from "@domain/models/monitoring/monitoring";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useMonitoringModel() {
  const navigate = useNavigate();
  const [date, setDate] = useState({ startDate: null, endDate: null });
  const [modalMachine, setOpenModalMachine] = useState(false);
  const [modalCasting, setOpenModalCasting] = useState(false);
  const [modalResultQrCode, setModalResultQrCode] = useState(false);
  const [modalResultReceipt, setOpenResultReceipt] = useState(false);

  const [dataMonitoring, setDataMonitoring] = useState<Monitoring[]>([]);

  const monitoringRepository = new MonitoringApiRepository();

  const getDataMonitoring = async () => {
    try {
      const result = await monitoringRepository.getDataMonitoring();
      setTimeout(() => {
        setDataMonitoring(result);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onSelectDate = (prev) => setDate(prev);
  const onMachineModalOpen = () => setOpenModalMachine(true);
  const onMachineModalClose = () => setOpenModalMachine(false);
  const onCastingModalOpen = () => setOpenModalCasting(true);
  const onCastingModalClose = () => setOpenModalCasting(false);
  const onResultReceiptOpen = () => setOpenResultReceipt(true);
  const onResultReceiptClose = () => setOpenResultReceipt(false);
  const onResultQrCodeOpen = () => setModalResultQrCode(true);
  const onResultQrCodeClose = () => setModalResultQrCode(false);

  const onNavigate = (path) => navigate(path);

  useEffect(() => {
    getDataMonitoring();
  }, []);

  return {
    date,
    modalMachine,
    modalCasting,
    modalResultReceipt,
    modalResultQrCode,
    onSelectDate,
    onMachineModalOpen,
    onMachineModalClose,
    onCastingModalOpen,
    onCastingModalClose,
    onNavigate,
    onResultReceiptOpen,
    onResultReceiptClose,
    onResultQrCodeOpen,
    onResultQrCodeClose,
    dataMonitoring,
  };
}
