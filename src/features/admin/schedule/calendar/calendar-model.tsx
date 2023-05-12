import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export default function useCalendar() {
  const navigate = useNavigate();
  // data parsing state after navigate
  const { state } = useLocation();
  // dummy data
  const dummyEvents = [
    {
      title: "BCH237",
      start: "2023-05-10T10:30:00",
      end: "2023-05-15T11:30:00",
      extendedProps: {
        department: "BioChemistry",
      },
      description: "Lecture",
    },
  ];
  //setup react form hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: state?.data?.type,
      machine: state?.data?.machine,
      departemen: state?.data?.departemen,
      section: state?.data?.section,
      range: state?.data?.range,
      date: state?.data?.date,
      deskripsi: state?.data?.deskripsi,
    },
  });
  //state list events calendar
  const [eventsCalendar, setEventsCalendar] = useState(dummyEvents || []);
  //state modal delete
  const [openModalDelete, setOpenModalDelete] = useState(false);
  //state modal confirm
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  //state modal success
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  //state max desc
  const [maxDesc, setMaxDesc] = useState<number>(0);
  //state modal remark
  const [openModalRemark, setOpenModalRemark] = useState<boolean>(false);

  //create event calendar
  const createCalendar = () => {
    setEventsCalendar([
      ...eventsCalendar,
      {
        title: "Test Event Title",
        start: "2023-05-19T10:30:00",
        end: "2023-05-19T11:30:00",
        extendedProps: {
          department: "Test Event Department",
        },
        description: "Test Event Description",
      },
    ]);
  };

  useEffect(() => {
    setMaxDesc(watch("deskripsi")?.length)
  }, [watch("deskripsi")]);

  return {
    eventsCalendar,
    state,
    errors,
    openModalDelete,
    openModalConfirm,
    openModalSuccess,
    maxDesc,
    openModalRemark,
    createCalendar,
    navigate,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    setMaxDesc,
    setOpenModalRemark
  };
}
