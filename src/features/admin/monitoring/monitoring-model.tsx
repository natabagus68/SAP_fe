import { useState } from "react";

export default function useMonitoringModel() {
  const [date, setDate] = useState({ startDate: null, endDate: null });
  const [modalMachine, setOpenModalMachine] = useState(false);
  const [modalCasting, setOpenModalCasting] = useState(false);

  const onSelectDate = (prev) => setDate(prev);
  const onMachineModalOpen = () => setOpenModalMachine(true);
  const onMachineModalClose = () => setOpenModalMachine(false);
  const onCastingModalOpen = () => setOpenModalCasting(true)
  const onCastingModalClose= () => setOpenModalCasting(false)

  return {
    date,
    modalMachine,
    modalCasting,
    onSelectDate,
    onMachineModalOpen,
    onMachineModalClose,
    onCastingModalOpen,
    onCastingModalClose
  };
}
