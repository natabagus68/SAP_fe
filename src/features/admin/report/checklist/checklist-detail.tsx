import React from "react";
import useChecklist from "./checklist-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import ChecklistIcon from "@common/components/icons-new/ChecklistIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import Modal from "@common/components/modals/Modal";
import gambar_part from "../../../../assets/gambar-part.png";
import PlusIcon from "@common/components/icons-new/PlusIcon";

export default function ChecklistDetail() {
  const checklist = useChecklist();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Report", "Checklist", "Detail"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Cheklist
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => checklist.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <ExportIcon color="white" />
              <span className="text-white text-sm font-semibold">
                Download Report
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">
              Informasi Maintenance
            </span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">No Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {checklist.dataCheklistById?.machine_no}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Nama Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {checklist.dataCheklistById?.machine_name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Pelaksana</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {checklist.dataCheklistById?.pic}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Waktu Kerja</td>
                  <td className="px-4 py-[6px] font-semibold text-[#F04438]">
                    {checklist.dataCheklistById?.working_time}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-[#12B569] rounded text-white w-fit px-3 py-1">
              Disetujui
            </div>
            <table className="w-fit">
              <thead>
                <tr>
                  <th className="text-start pr-[80px] pb-4">Diperiksa</th>
                  <th className="text-start pb-4">Disetujui</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                        <ChecklistIcon className="w-[14px] h-[14px]" />
                      </div>
                      <span>{checklist.dataCheklistById?.checkedBy}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                        <ChecklistIcon className="w-[14px] h-[14px]" />
                      </div>
                      <span>{checklist.dataCheklistById?.approveBy}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-base text-[#514E4E] flex items-center gap-4">
              <span>Tanggal & Jam Checklist :</span>
              <span className="font-semibold">
                {checklist.dataCheklistById?.date}
              </span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {checklist.dataCheklistById?.section}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Departemen</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {checklist.dataCheklistById?.department}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex justify-between items-center py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Laporan Checklist
          </span>
          <div className="space-x-10">
            <span>
              Quantity_
              <span className="font-semibold, text-[#F04438]">
                NG:{checklist.dataCheklistById?.ng}
              </span>
            </span>
            <span>
              Quantity_
              <span className="font-semibold, text-[#12B569]">
                OK:{checklist.dataCheklistById?.ok}
              </span>
            </span>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Sub-Mechine
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Parameter
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Indikator
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Status
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Deskripsi
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E] border">
            {checklist.dataCheklistById?.report?.map((item, i) => (
              <>
                <tr key={i}>
                  <td
                    rowSpan={item.parameter?.length + 1}
                    className="px-[32px] border-r border-b border-[#D0D3D9] text-center"
                  >
                    {item.submesin_name} {item.parameter?.length}
                  </td>
                </tr>
                {(item.parameter || []).map((item, ii) => (
                  <tr key={`${i}_${ii}`}>
                    <td className="px-[32px] border-r border-b border-[#D0D3D9] text-center">
                      {item.parameter_name}
                    </td>
                    <td className="px-[32px] border-r border-b border-[#D0D3D9] text-center">
                      {item.indikator}
                    </td>
                    <td className="px-[32px] py-[10px] border-r border-b border-[#D0D3D9] text-center ">
                      <div
                        className={`h-[40px] w-fit px-3 text-white flex items-center justify-center ${
                          item?.status_report == "rusak"
                            ? "bg-[#F36960]"
                            : item?.status_report == "ok"
                            ? "bg-[#20519F]"
                            : item?.status_report == "indikasi"
                            ? "bg-[#12B569]"
                            : item?.status_report == "telah diperbaiki"
                            ? "bg-[#F9A63A]"
                            : null
                        } rounded-xl text-base`}
                      >
                        {item.status_report}
                      </div>
                    </td>
                    <td className="px-[32px] border-r border-b border-[#D0D3D9] text-center">
                      {item.deskripsi}
                    </td>
                    <td className="px-[32px] border-b py-[10px]">
                      <div className="flex items-center gap-6">
                        {item.status_report == "ok" ? (
                          "-"
                        ) : (
                          <button
                            className="flex items-center gap-2 h-[40px] px-[20px] bg-[#1BBDD4]"
                            onClick={() => checklist.setOpenModalDetail(true)}
                          >
                            <EyeShowIcon color="white" />
                            <span className="text-white text-sm font-semibold">
                              Lihat
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color="#B8B6B6"
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            1
          </div>
          <button className="px-4 h-[40px] text-[#20519F] border gap-2 border-[#20519F] rounded flex items-center justify-center">
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color="#20519F"
            />
          </button>
        </div>
      </div>

      <Modal open={checklist.openModalDetail}>
        <div className="w-[800px] flex flex-col gap-2">
          <div className="w-full flex items-center justify-between p-[18px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Detail Cheklist
            </span>
            <div className="flex items-end gap-4">
              <button
                className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
                onClick={() => checklist.onOpenBackDetail()}
              >
                <PlusIcon className="rotate-45 w-5 h-5" color="#20519F" />
                <span className="text-[#20519F] text-sm font-semibold">
                  Tutup
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex gap-[25px] p-[18px] flex-wrap justify-center">
            <div className="flex flex-col justify-around">
              <span className="text-base font-bold text-[#514E4E] mb-3">
                Photo
              </span>
              <table className="w-[50px]">
                <tbody className="w-[100px] items-center">
                  <tr>
                    <td className="px-[16px]">
                      <div className="w-[50px] h-[50px]">
                        <img src={gambar_part} alt="Gambar=part" />
                      </div>
                    </td>
                    <td className="px-[16px]">Photo_kerusakan.jpg</td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      <a onClick={() => checklist.setOpenModalPicture(true)}>
                        Lihat
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col justify-around">
              <span className="text-base font-bold text-[#514E4E] mb-3">
                Video
              </span>
              <table className="w-[50px]">
                <tbody className="w-[100px] items-center">
                  <tr>
                    <td className="px-[16px]">
                      <div className="w-[50px] h-[50px]">
                        <img src={gambar_part} alt="Gambar=part" />
                      </div>
                    </td>
                    <td className="px-[16px]">video_kerusakan.mp4</td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      <a onClick={() => checklist.setOpenModalVideo(true)}>
                        Lihat
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>

      <dialog
        open={checklist.openModalPicture}
        className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
      >
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="relative flex justify-center ">
            <img src={gambar_part} alt="Gambar=part" className="w-[500px]" />
            <button
              className="flex items-center p-2 top-0 right-0  absolute "
              onClick={() => checklist.onOpenBackModalPicture()}
            >
              <PlusIcon className="rotate-45 w-6 h-6" color="white" />
            </button>
          </div>
        </div>
      </dialog>

      <dialog
        open={checklist.openModalVideo}
        className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
      >
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="relative flex justify-center ">
            <img src={gambar_part} alt="Gambar=part" className="w-[500px]" />
            <button
              className="flex items-center p-2 top-0 right-0  absolute "
              onClick={() => checklist.onOpenBackModalVideo()}
            >
              <PlusIcon className="rotate-45 w-6 h-6" color="white" />
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
}
