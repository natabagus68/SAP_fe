import { Breadcrumbs } from "@common/components";
import Fullcalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import useCalendar from "./calendar-model";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import FlieIcon from "@common/components/icons-new/FileIcon";
import maintenance_success from "../../../../assets/svg/maintenance_success.svg";
import maintenance_process from "../../../../assets/svg/maintenance_process.svg";
import maintenance_warning from "../../../../assets/svg/maintenance_warning.svg";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";

export default function CalendarView() {
  const calendar = useCalendar();
  return (
    <main className="flex flex-col gap-[28px] h-[calc(100dvh-120px)]">
      <ModalDelete
        open={calendar.openModalDelete}
        setOpen={calendar.setOpenModalDelete}
        setOpenConfirm={calendar.setOpenModalConfirm}
      />
      <ModalConfirm
        open={calendar.openModalConfirm}
        confirmMessage="Apakah anda yakin untuk menghapus data ini?"
        setOpen={calendar.setOpenModalConfirm}
        setOpenSuccess={calendar.setOpenModalSuccess}
        cb={(setIsLoading) => {
          setTimeout(() => {
            setIsLoading({ loading: false, exec: true });
            console.log("delete mesin");
          }, 3000);
        }}
      />
      <ModalSuccess
        open={calendar.openModalSuccess}
        setOpen={calendar.setOpenModalSuccess}
      />
      <dialog
        open={calendar.openModalRemark}
        className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
      >
        <div className="w-[716px] rounded-xl absolute bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="w-full px-[32px] py-[17px] flex items-center justify-between border-b">
            <span className="text-2xl text-[#514E4E] font-bold ">Remark</span>
            <button
              className="bg-white rounded gap-2 h-[46px] px-2 flex items-center justify-center border border-[#20519F]"
              onClick={() => {
                calendar.setOpenModalRemark(false);
              }}
            >
              <PlusIcon color="#20519F" className="rotate-45" />
              <span className="text-[#20519F] font-semibold">Tutup</span>
            </button>
          </div>
          <div className="p-[32px]">
            Maintenance minggu ini akan ditunda beberapa minggu.
          </div>
        </div>
      </dialog>
      <Breadcrumbs items={["Schedule", "Calendar"]} />
      <div className="flex gap-[28px] flex-1">
        <div className="rounded-md border w-[308px] p-6 border-[#D0D3D9] bg-white flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <button
              className="bg-[#20519F] rounded gap-2 w-full h-[46px] flex items-center justify-center"
              onClick={() => {
                // calendar.createCalendar();
                calendar.navigate("create");
              }}
            >
              <PlusIcon />
              <span className="text-white font-semibold">
                Add New Maintenance
              </span>
            </button>
            <button
              className="bg-white rounded gap-2 w-full h-[46px] flex items-center justify-center border border-[#20519F]"
              onClick={() => {
                // calendar.createCalendar();
                calendar.navigate("remark");
              }}
            >
              <FlieIcon />
              <span className="text-[#20519F] font-semibold">Add Remark</span>
            </button>
            <div className="px-[20px] py-[17px] gap-2 border rounded flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="text-[#514E4E] font-semibold text-base">
                  Remark
                </span>
                <span className="text-[#514E4E] truncate">
                  Maintenance minggu ini akan ditunda beberapa minggu.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => calendar.setOpenModalRemark(true)}>
                  <EyeShowIcon color="#20519F" />
                </button>
                <button onClick={() => calendar.setOpenModalDelete(true)}>
                  <TrashIcon color="#F04438" />
                </button>
              </div>
            </div>
            <div className="px-[20px] py-[17px] gap-2 border rounded flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={maintenance_success}
                  alt="Maintenace Icon"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-[#514E4E] ">Senin, 4 Jul , 2022</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#514E4E] font-semibold text-base">
                  Preventive Machine A
                </span>
                <span className="text-[#514E4E] ">Senin, 4 Jul , 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    calendar.navigate("edit", {
                      state: {
                        edit: true,
                        data: {
                          type: "type",
                          machine: "machine",
                          departemen: "departemen",
                          section: "section",
                          range: "range",
                          date: "1999-05-08",
                        },
                      },
                    })
                  }
                >
                  <EditIcon color="#F79009" />
                </button>
                <button onClick={() => calendar.setOpenModalDelete(true)}>
                  <TrashIcon color="#F04438" />
                </button>
              </div>
            </div>
            {/* <div className="px-[20px] py-[17px] gap-2 border rounded flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={maintenance_process}
                  alt="Maintenace Icon"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-[#514E4E] ">Senin, 4 Jul , 2022</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#514E4E] font-semibold text-base">
                  Preventive Machine C
                </span>
                <span className="text-[#514E4E] ">Senin, 4 Jul , 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <button>
                  <EditIcon color="#F79009" />
                </button>
                <button>
                  <TrashIcon color="#F04438" />
                </button>
              </div>
            </div> */}
            {/* <div className="px-[20px] py-[17px] gap-2 border rounded flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={maintenance_warning}
                  alt="Maintenace Icon"
                  className="w-[20px] h-[20px]"
                />
                <span className="text-[#514E4E] ">Senin, 4 Jul , 2022</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#514E4E] font-semibold text-base">
                  Preventive Machine B
                </span>
                <span className="text-[#514E4E] ">Senin, 4 Jul , 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <button>
                  <EditIcon color="#F79009" />
                </button>
                <button>
                  <TrashIcon color="#F04438" />
                </button>
              </div>
            </div> */}
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color="#B8B6B6"
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              1
            </div>
            <div className="flex items-center justify-center text-[#20519F]">
              ...
            </div>
            <div className="flex items-center justify-center text-[#20519F]">
              4
            </div>
            <button className="px-4 h-[40px] text-[#20519F] border gap-2 border-[#20519F] rounded flex items-center justify-center">
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color="#20519F"
              />
            </button>
          </div>
        </div>
        <div className="rounded-md border flex-1 border-[#D0D3D9] p-[14px] bg-white">
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height={"100%"}
            headerToolbar={{
              left: "title",
              center: "",
              right: "prev today next",
            }}
            events={calendar.eventsCalendar}
          />
        </div>
      </div>
    </main>
  );
}
