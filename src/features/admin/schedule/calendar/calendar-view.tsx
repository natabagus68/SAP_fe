import { Breadcrumbs } from "@common/components";
import Fullcalendar from "@fullcalendar/react";
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
import { useEffect, useRef } from "react";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import moment from "moment";
// import moment from "moment/min/moment-with-locales";
// import "moment/locale/id";

export default function CalendarView() {
  const calendar = useCalendar();
  useEffect(() => {
    calendar.getDataMaintenance();
    calendar.calendarInstance.current = calendar.Fullcalendar(
      calendar.calendarRef.current
    );
    return () => {
      calendar.calendarInstance.current.destroy();
    };
  }, [calendar.month, calendar.day, calendar.dataSchedules, calendar.page]);
  useEffect(() => {
    calendar.getDataMaintenanceAll();
  }, [calendar.month]);

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
            if (calendar.remarkData == "remark") {
              calendar.deleteRemark(calendar.dataId, setIsLoading);
            } else {
              calendar.deleteMaintenance(calendar.dataId, setIsLoading);
            }
            calendar.setRemarkData(null);
          }, 500);
        }}
      />
      <ModalSuccess
        open={calendar.openModalSuccess}
        setOpen={calendar.setOpenModalSuccess}
        isSuccess={calendar.isSuccess}
        successMessage="Berhasil menghapus data!"
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
                calendar.setRemarkData(null);
              }}
            >
              <PlusIcon color="#20519F" className="rotate-45" />
              <span className="text-[#20519F] font-semibold">Tutup</span>
            </button>
          </div>
          <div className="p-[32px]">{calendar.remarkData || "-"}</div>
        </div>
      </dialog>
      <Breadcrumbs items={["Schedule", "Calendar"]} />
      <div className="flex gap-[28px] h-[calc(100dvh-175px)]">
        <div className="rounded-md border w-[308px] p-6 border-[#D0D3D9] bg-white flex flex-col justify-between gap-3 overflow-auto">
          <div className="flex flex-col gap-3">
            <button
              className="bg-[#20519F] rounded gap-2 w-full h-[46px] flex items-center justify-center"
              onClick={() => {
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
                calendar.navigate("remark");
              }}
            >
              <FlieIcon />
              <span className="text-[#20519F] font-semibold">Add Remark</span>
            </button>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div>
              {calendar.isLoadingData ? (
                <div className="w-full h-[48px] flex items-center justify-center">
                  <LoadingIcon
                    color="black"
                    className="w-[24px] h-[24px] animate-spin"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {calendar.dataMaintenance?.map((item, _i) =>
                    item.schedules?.maintenance?.map((maintenance, i) => (
                      <div
                        key={i}
                        className="px-[20px] py-[17px] gap-2 border rounded flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-2">
                          {maintenance.type == "remark" ? (
                            <FlieIcon
                              className="w-[22px] h-[22px]"
                              color="#514E4E"
                            />
                          ) : (
                            <img
                              src={
                                maintenance.type == "checklist"
                                  ? maintenance_success
                                  : maintenance.type == "preventive"
                                  ? maintenance_process
                                  : maintenance.type == "corrective"
                                  ? maintenance_warning
                                  : null
                              }
                              alt="Maintenace Icon"
                              className="w-[20px] h-[20px]"
                            />
                          )}
                          <span className="text-[#514E4E] ">
                            {maintenance.type[0].toLocaleUpperCase()}
                            {maintenance.type.slice(1)}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#514E4E] font-semibold text-base flex flex-col">
                            <span>
                              {maintenance.type != "remark"
                                ? `${maintenance.type[0].toLocaleUpperCase()}${maintenance.type.slice(
                                    1
                                  )} Machine`
                                : null}
                            </span>
                            <span>
                              {maintenance.type != "remark"
                                ? `${maintenance.machine}`
                                : null}
                            </span>
                            <span className="text-[#514E4E] truncate">
                              {maintenance.type == "remark"
                                ? `${maintenance.content}`
                                : null}
                            </span>
                          </span>
                          <span className="text-[#514E4E] ">
                            {moment(
                              item.schedules?.date
                                .split("-")
                                .reverse()
                                .join("-")
                            ).format("dddd, DD MMM YYYY")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {maintenance.type == "remark" ? (
                            <button
                              onClick={() => {
                                calendar.setOpenModalRemark(true);
                                calendar.setRemarkData(maintenance.content);
                              }}
                            >
                              <EyeShowIcon color="#20519F" />
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                calendar.navigate(`${maintenance.id}/edit`)
                              }
                            >
                              <EditIcon color="#F79009" />
                            </button>
                          )}
                          <button
                            onClick={() => {
                              if (maintenance.type == "remark") {
                                calendar.setRemarkData("remark");
                                calendar.setDataId(maintenance.id);
                              } else {
                                calendar.setDataId(maintenance.id);
                              }
                              calendar.setOpenModalDelete(true);
                            }}
                          >
                            <TrashIcon color="#F04438" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                  {/* {calendar.dataMaintenance?.map((item, _i) =>
                    item.schedules?.remark?.map((remark, i) => (
                      <div
                        key={i}
                        className="px-[20px] py-[17px] gap-2 border rounded flex flex-col justify-between"
                      >
                        <div className="flex flex-col">
                          <span className="text-[#514E4E] font-semibold text-base">
                            Remark
                          </span>
                          <span className="text-[#514E4E] truncate">
                            {remark.remark}
                          </span>
                          <span className="text-[#514E4E] ">
                            {moment(
                              item.schedules?.date
                                .split("-")
                                .reverse()
                                .join("-")
                            ).format("dddd, DD MMM YYYY")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              calendar.setOpenModalRemark(true);
                              calendar.setRemarkData(remark.remark);
                            }}
                          >
                            <EyeShowIcon color="#20519F" />
                          </button>
                          <button
                            onClick={() => {
                              calendar.setRemarkData("remark");
                              calendar.setDataId(remark.id);
                              calendar.setOpenModalDelete(true);
                            }}
                          >
                            <TrashIcon color="#F04438" />
                          </button>
                        </div>
                      </div>
                    ))
                  )} */}
                </div>
              )}
            </div>
            {!calendar.isLoadingData ? (
              !!!calendar.dataMaintenance[0]?.schedules?.maintenance?.length &&
              !!!calendar.dataMaintenance[0]?.schedules?.remark?.length ? (
                <span className="text-[#514E4E] text-[14px] font-semibold text-center">
                  Tidak ada data
                </span>
              ) : null
            ) : null}
          </div>
          <div className="flex justify-center gap-4">
            <button
              disabled={
                !!calendar.dataMaintenance[0]?.meta?.prevPage ? false : true
              }
              onClick={() =>
                calendar.navigate(
                  `../${calendar.day}/${calendar.month}/${calendar.year}/${calendar.dataMaintenance[0]?.meta?.prevPage}/calendar`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!calendar.dataMaintenance[0]?.meta?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!calendar.dataMaintenance[0]?.meta?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!calendar.dataMaintenance[0]?.meta?.page
                ? calendar.dataMaintenance[0]?.meta?.page
                : 1}
            </div>
            <button
              disabled={
                !!calendar.dataMaintenance[0]?.meta?.nextPage ? false : true
              }
              onClick={() =>
                calendar.navigate(
                  `../${calendar.day}/${calendar.month}/${calendar.year}/${calendar.dataMaintenance[0]?.meta?.nextPage}/calendar`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!calendar.dataMaintenance[0]?.meta?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!calendar.dataMaintenance[0]?.meta?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        </div>
        <div className="rounded-md border flex-1 border-[#D0D3D9] p-[14px] bg-white">
          <div ref={calendar.calendarRef} />
        </div>
      </div>
    </main>
  );
}
