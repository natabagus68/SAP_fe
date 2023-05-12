import React from "react";
import useLogPart from "./log-part-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import gambar_part from "../../../../assets/Gambar-part.png";
import drawing from "../../../../assets/Drawing.png";
import ExportIcon from "@common/components/icons-new/ExportIcon";

export default function LogPartDetails() {
  const logPart = useLogPart();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Master Data", "Log Part", "Details"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Part
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => logPart.navigate("../")}
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
            <span className="text-2xl text-[#514E4E]">Informasi Part</span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Stok</td>
                  <td className="px-4 py-[6px] font-semibold">123</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Item Code</td>
                  <td className="px-4 py-[6px] font-semibold">0001312</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Availability</td>
                  <td className="px-4 py-[6px] font-semibold">Alloy Casting</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Rak</td>
                  <td className="px-4 py-[6px] font-semibold">B001</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Part No</td>
                  <td className="px-4 py-[6px] font-semibold">0834</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Part Name</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Pillow Block Bearing
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Brand</td>
                  <td className="px-4 py-[6px] font-semibold">Ferrox</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Specification</td>
                  <td className="px-4 py-[6px] font-semibold">44 mm</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Unit of Measurament (UoM) </td>
                  <td className="px-4 py-[6px] font-semibold">
                    Pillow Block Bearing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Type Kategory </td>
                  <td className="px-4 py-[6px] font-semibold">Inti</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Vendor</td>
                  <td className="px-4 py-[6px] font-semibold">
                    PT Ragdalion Technology
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Cost</td>
                  <td className="px-4 py-[6px] font-semibold">Rp. 100.000</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Pengadaan</td>
                  <td className="px-4 py-[6px] font-semibold">Fast Moving</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Remark</td>
                  <td className="px-4 py-[6px] font-semibold">Discontinue</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Alternative Part</td>
                  <td className="px-4 py-[6px] font-semibold">SF01312</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Minimum Stock</td>
                  <td className="px-4 py-[6px] font-semibold">12</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Delivery Time</td>
                  <td className="px-4 py-[6px] font-semibold">3 Hari</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Maintence Rate</td>
                  <td className="px-4 py-[6px] font-semibold">1 Year</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Description</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Filter Element
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Kategory</td>
                  <td className="px-4 py-[6px] font-semibold">Mechanical</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Garansi Datang</td>
                  <td className="px-4 py-[6px] font-semibold">12/12/2023</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Garansi Pakai</td>
                  <td className="px-4 py-[6px] font-semibold">12/12/2023</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Status</td>
                  <td className="px-4 py-[6px] font-semibold">Baru</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6 space-y-4">
            <span className="text-2xl text-[#514E4E]">Gambar Part</span>
            <div className="w-auto h-auto overflow-hidden ">
              <img src={gambar_part} alt="Gambar-Part" />
            </div>
            <span className="text-2xl text-[#514E4E]">Drawing</span>
            <div className="w-auto h-auto overflow-hidden ">
              <img src={drawing} alt="drawing" />
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-2xl text-[#514E4E]">
                Informasi Penggunaan
              </span>
              <table className="w-[442px]">
                <tbody>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">Date</td>
                    <td className="px-4 py-[6px] font-semibold">
                      12/12/2022 12:21:01
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-[6px]">Manpower</td>
                    <td className="px-4 py-[6px] font-semibold">
                      Tunggal Sigit
                    </td>
                  </tr>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">Request Quantity</td>
                    <td className="px-4 py-[6px] font-semibold">20</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-[6px]">20</td>
                    <td className="px-4 py-[6px] font-semibold">Preventive</td>
                  </tr>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">No Machine</td>
                    <td className="px-4 py-[6px] font-semibold">STA5353</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-[6px]">Nama Machine</td>
                    <td className="px-4 py-[6px] font-semibold">Furnace</td>
                  </tr>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">Deskripsi</td>
                    <td className="px-4 py-[6px] font-semibold">
                      Machine perlu ganti Pillow block bearing untuk membuat
                      Machine berjalan lebih halus kembali
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
