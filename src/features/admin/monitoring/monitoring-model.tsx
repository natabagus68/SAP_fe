import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useMonitoringModel() {
  const navigate = useNavigate();
  const [date, setDate] = useState({ startDate: null, endDate: null });
  const [modalMachine, setOpenModalMachine] = useState(false);
  const [modalCasting, setOpenModalCasting] = useState(false);
  const [modalQrCode, setOpenModalQrCode] = useState(false);

  const onSelectDate = (prev) => setDate(prev);
  const onMachineModalOpen = () => setOpenModalMachine(true);
  const onMachineModalClose = () => setOpenModalMachine(false);
  const onCastingModalOpen = () => setOpenModalCasting(true);
  const onCastingModalClose = () => setOpenModalCasting(false);
  const onQrCodeOpen = () => setOpenModalQrCode(true);
  const onQrCodeClose = () => setOpenModalQrCode(false);

  const onNavigate = (path) => navigate(path);

  return {
    date,
    modalMachine,
    modalCasting,
    modalQrCode,
    onSelectDate,
    onMachineModalOpen,
    onMachineModalClose,
    onCastingModalOpen,
    onCastingModalClose,
    onQrCodeOpen,
    onQrCodeClose,
    onNavigate,
  };
}
