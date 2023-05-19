import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { MesinApiRepository } from "@data/api/mesin/mesin-api-repository";
import { CalendarApiRepository } from "@data/api/schedule/calendar/calendar-api-repository";
import { Section } from "@domain/models/location/section";
import { Mesin } from "@domain/models/mesin/mesin";
import { Calendar } from "@domain/models/schedule/calendar/calendar";
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
      machine_id: state?.data?.machine,
      section_id: state?.data?.section,
      range: state?.data?.range,
      range_type: state?.data?.range_type || "Bulan",
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
  //state data mesin
  const [dataMesin, setDataMesin] = useState<Mesin[]>([]);
  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //api repository
  const machineRepository = new MesinApiRepository();
  const sectionRepository = new SectionApiRepository();
  const calendarRepository = new CalendarApiRepository();

  // get data mesin
  const getDataMachine = async () => {
    try {
      const result = await machineRepository.get();
      setDataMesin(result);
    } catch (error) {
      console.log(error);
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

  //create Maintenance
  const createMaintenance = async (data) => {
    const result = await calendarRepository.create(
      Calendar.create({
        type: data.type,
        machineId: data.machine_id,
        sectionId: data.section_id,
        activeRange: `${data.range} ${data.range_type}`,
        startDate: data.date.split("-").reverse().join("-"),
      })
    );
    if (result.success) {
      navigate("..");
    } else {
      console.log(result.message);
    }
  };

  useEffect(() => {
    setMaxDesc(watch("deskripsi")?.length);
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
    dataMesin,
    dataSection,
    createCalendar,
    navigate,
    register,
    handleSubmit,
    setOpenModalDelete,
    setOpenModalConfirm,
    setOpenModalSuccess,
    setMaxDesc,
    setOpenModalRemark,
    getDataMachine,
    getDataSection,
    createMaintenance,
  };
}
