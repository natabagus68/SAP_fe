import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { MesinApiRepository } from "@data/api/mesin/mesin-api-repository";
import { CalendarApiRepository } from "@data/api/schedule/calendar/calendar-api-repository";
import { Section } from "@domain/models/location/section";
import { Mesin } from "@domain/models/mesin/mesin";
import { Calendar } from "@domain/models/schedule/calendar/calendar";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Calendar as FullCalendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import { Remark } from "@domain/models/schedule/calendar/remark";
import { number } from "prop-types";

export default function useCalendar() {
  const navigate = useNavigate();
  // data parsing state after navigate
  const { state } = useLocation();
  // get data from params url
  const { day, month, year, page } = useParams();
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
  //state data Maintenance
  const [dataMaintenance, setDataMaintenance] = useState<Calendar[]>([]);
  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);
  //state data Schedules
  const [dataSchedules, setDataSchedules] = useState([]);

  //api repository
  const machineRepository = new MesinApiRepository();
  const sectionRepository = new SectionApiRepository();
  const calendarRepository = new CalendarApiRepository();

  //use ref for calendar
  const calendarRef = useRef<HTMLDivElement>();
  //use ref for calendarInstanc
  const calendarInstance = useRef<FullCalendar>();

  //state for parsing data id
  const [dataId, setDataId] = useState(null);
  //state succes create/update data
  const [isSuccess, setIsSuccess] = useState(false);
  //state succes create/update data
  const [remarkData, setRemarkData] = useState(null);

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

  // get data Maintenance
  const getDataMaintenance = async () => {
    setIsLoadingData(true);
    setDataMaintenance([]);
    try {
      const result = await calendarRepository.get(
        Number(day),
        Number(month),
        Number(page),
        3
      );
      setTimeout(() => {
        setDataMaintenance(result);
        setIsLoadingData(false);
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };
  // get data Maintenance
  const getDataMaintenanceAll = async () => {
    setDataSchedules([]);
    try {
      const result = await calendarRepository.get(
        null,
        Number(month),
        null,
        null
      );
      setDataSchedules(
        result.map((item) =>
          Array.from(
            new Set(item.schedules?.maintenance?.map((item) => item?.type))
          )
        )
      );
    } catch (error) {
      throw new Error(error);
    }
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
  //create Maintenance
  const deleteMaintenance = async (id: string, setIsLoading) => {
    const result = await calendarRepository.delete(id);
    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        getDataMaintenance();
        getDataMaintenanceAll();
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    } else {
      setIsSuccess(false);
      console.log(result.message);
      setTimeout(() => {
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    }
  };
  //create Maintenance
  const createRemark = async (data) => {
    const result = await calendarRepository.remark(
      Remark.create({
        remark: data.deskripsi,
        date: data.date.split("-").reverse().join("-"),
      })
    );
    if (result.success) {
      navigate("..");
    } else {
      console.log(result.message);
    }
  };
  //create Maintenance
  const deleteRemark = async (id: string, setIsLoading) => {
    const result = await calendarRepository.deleteRemark(id);
    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        getDataMaintenance();
        getDataMaintenanceAll();
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    } else {
      setIsSuccess(false);
      console.log(result.message);
      setTimeout(() => {
        setIsLoading({ loading: false, exec: true });
        setDataId(null);
      }, 500);
    }
  };

  //setup Fullcalendar library
  const Fullcalendar = (element: HTMLDivElement) => {
    let calendar = new FullCalendar(element, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      height: "100%",
      headerToolbar: {
        left: "title",
        center: "",
        right: "prev today next",
      },
      // events: eventsCalendar,
      selectable: true,
      longPressDelay: 0,
      initialDate: `${year}-${Number(month) < 10 ? `0${month}` : month}-${
        Number(day) < 10 ? `0${day}` : day
      }`,
      select: (info) => {
        setTimeout(() => {
          if (Number(info.startStr.split("-")[1]) == Number(month)) {
            navigate(
              `../${Number(info.startStr.split("-")[2])}/${Number(
                moment(calendar.getDate()).format("MM")
              )}/${moment(calendar.getDate()).format("YYYY")}/1/calendar`
            );
          }
        }, 150);
      },
      dayCellDidMount: async (info) => {
        if (
          moment(info.date).format("YYYYMM") ==
          `${year}${Number(month) < 10 ? `0${month}` : month}`
        ) {
          const element = document.createElement("div");
          element.className = "day-components";
          try {
            element.innerHTML = dataSchedules.length
              ? dataSchedules[Number(moment(info.date).format("DD")) - 1]
                  ?.map((item) =>
                    item == "corrective"
                      ? `<div class="day-corrective"></div>`
                      : item == "preventive"
                      ? `<div class="day-preventive"></div>`
                      : item == "checklist"
                      ? `<div class="day-checklist"></div>`
                      : null
                  )
                  .join("")
              : null;
          } catch (error) {
            throw new Error(error);
          }
          info.el.childNodes[0].appendChild(element);
        }
      },
      customButtons: {
        prev: {
          click: () => {
            setDataSchedules([]);
            calendar.prev();
            navigate(
              `../${day}/${Number(
                moment(calendar.getDate()).format("MM")
              )}/${moment(calendar.getDate()).format("YYYY")}/1/calendar`
            );
          },
        },
        next: {
          click: () => {
            setDataSchedules([]);
            calendar.next();
            navigate(
              `../${day}/${Number(
                moment(calendar.getDate()).format("MM")
              )}/${moment(calendar.getDate()).format("YYYY")}/1/calendar`
            );
          },
        },
        today: {
          text: "Today",
          click: () => {
            setDataSchedules([]);
            calendar.today();
            navigate(
              `../${Number(moment(calendar.getDate()).format("DD"))}/${Number(
                moment(calendar.getDate()).format("MM")
              )}/${moment(calendar.getDate()).format("YYYY")}/1/calendar`
            );
          },
        },
      },
    });
    calendar.render();
    return calendar;
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
    isLoadingData,
    dataMaintenance,
    month,
    calendarRef,
    dataId,
    isSuccess,
    remarkData,
    day,
    year,
    page,
    calendarInstance,
    dataSchedules,
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
    getDataMaintenance,
    createMaintenance,
    Fullcalendar,
    setDataId,
    deleteMaintenance,
    createRemark,
    deleteRemark,
    setRemarkData,
    getDataMaintenanceAll,
  };
}
