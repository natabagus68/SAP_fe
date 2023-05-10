import React from "react";
import useCorrective from "./corrective-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ChecklistIcon from "@common/components/icons-new/ChecklistIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import Modal from "@common/components/modals/Modal";

export default function CorrectiveDetail() {
  const corrective = useCorrective();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Corrective", "Details"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Cheklist
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => corrective.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <ExportIcon color="white" />
              <span className="text-white text-sm font-semibold">
                Export Report
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
                  <td className="px-4 py-[6px] font-semibold">SR-12345</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Nama Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">Furnace</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Pelaksana</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Bramantra Putra
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Durasi Kerusakan</td>
                  <td className="px-4 py-[6px] font-semibold ">
                    1 Jam 23 menit
                  </td>
                </tr>
              </tbody>
            </table>
            <span className="text-2xl text-[#514E4E]">Laporan Corrective</span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Tipe Perbaikan</td>
                  <td className="px-4 py-[6px] font-semibold">Sementara</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Estimasi Lifetime</td>
                  <td className="px-4 py-[6px] font-semibold">17/01/22</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Jenis Kerusakan</td>
                  <td className="px-4 py-[6px] font-semibold">Kerusakan 1</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Deskripsi Kerusakan</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Terjadi kerusakan Pada Mesin
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-base text-[#514E4E] flex gap-4">
              <span>Tanggal & Jam Corrective :</span>
              <span className="font-semibold">12/12/2022</span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px] font-semibold">Alloy Casting</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Departemen</td>
                  <td className="px-4 py-[6px] font-semibold">Profile</td>
                </tr>
              </tbody>
            </table>

            <div className="text-base text-[#514E4E] flex gap-4 space-y-8">
              <span className="text-2xl text-[#514E4E]">
                Dokumentasi Kerusakan
              </span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Before</td>
                  <td className="px-4 py-[6px] font-semibold">Lihat</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">After</td>
                  <td className="px-4 py-[6px] font-semibold">Lihat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Laporan Checklist
          </span>
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
          <tbody className="text-base text-[#514E4E]">
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td
                rowSpan={3}
                className="px-[32px] border-r border-[#D0D3D9] text-center"
              >
                Dump Feeder
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                1. pompa listrik
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                Oil;Presure;Bocor;Mekanis;Motor
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                Kopel pompa mesin kotor
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                <div
                  className={`h-[32px] w-fit px-3 text-white flex items-center justify-center bg-[#F36960] rounded-xl`}
                >
                  Rusak
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px] border-r border-[#D0D3D9]">2. Gear</td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                Berkarat;Bocor;Gelas Ukur
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">-</td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                <div
                  className={`h-[32px] w-fit px-3 text-white flex items-center justify-center bg-[#20519F] rounded-xl`}
                >
                  OK
                </div>
              </td>
              <td className="px-[32px]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4]"
                    onClick={() => corrective.setOpenModalExport(true)}
                  >
                    <EyeShowIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Lihat
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px] border-r border-[#D0D3D9]">
                3. Shaft & Bearing
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                Bunyi:tidak lancar;
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                Kopel pompa kotor
              </td>
              <td className="px-[32px] border-r border-[#D0D3D9]">
                <div
                  className={`h-[40px] w-fit px-3 text-white flex items-center justify-center bg-[#F9A63A] rounded-xl text-xs`}
                >
                  Telah diperbaiki
                </div>
              </td>
              <td className="px-[32px]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4]"
                    onClick={() => corrective.setOpenModalExport(true)}
                  >
                    <EyeShowIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Lihat
                    </span>
                  </button>
                </div>
              </td>
            </tr>
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

      <Modal open={corrective.openModalExport}>
        <div className="w-[800px] flex flex-col gap-2">
          <div className="w-full flex items-center justify-between p-[18px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Detail Cheklist
            </span>
            <div className="flex items-end gap-4">
              <button
                className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
                onClick={() => corrective.onOpenBack()}
              >
                <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
                <span className="text-[#20519F] text-sm font-semibold">
                  Tutup
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex gap-[50px] py-[18px] px-[32px] flex-wrap">
            <div className="flex flex-col justify-around">
              <span className="text-base font-bold text-[#514E4E]">Photo</span>
              <table className="w-[50px]">
                <tbody className="w-[100px] items-center">
                  <tr>
                    <td className="px-[16px]">
                      <div className="w-[50px] h-[50px]">
                        {/* <img src={gambar_part} alt="Gambar=part" /> */}
                      </div>
                    </td>
                    <td className="px-[16px]">Photo_kerusakan.jpg</td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      Lihat
                    </td>
                  </tr>
                  <tr>
                    <td className="px-[16px]">
                      <div className="w-[50px] h-[50px]">
                        {/* <img src={gambar_part} alt="Gambar=part" /> */}
                      </div>
                    </td>
                    <td className="px-[16px]">Photo_kerusakan.jpg</td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      Lihat
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="text-base font-bold text-[#514E4E]">Video</span>
            {/* <table className="w-[50px]">
              <tbody className="w-[100px] items-center">
                <tr>
                  <td className="px-[16px]">
                    <div className="w-[50px] h-[50px]">
                      <img src={gambar_part} alt="Gambar=part" />
                    </div>
                  </td>
                  <td className="px-[16px]">Photo_kerusakan.jpg</td>
                  <td className="px-[16px] font-semibold text-blue-700">
                    Lihat
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </Modal>
    </main>
  );
}
