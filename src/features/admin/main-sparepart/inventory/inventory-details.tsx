import React from "react";
import useInventory from "./inventory-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import gambar_part from "../../../../assets/Gambar-part.png";
import drawing from "../../../../assets/Drawing.png";

export default function InventoryDetails() {
  const inventory = useInventory();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={["Sparepart", `Inventory`, `${inventory.type[0].toLocaleUpperCase()}${inventory.type.slice(1)}`, "Details"]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Part {inventory.type[0].toLocaleUpperCase()}{inventory.type.slice(1)}
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => inventory.navigate("../")}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">Informasi Part</span>
            <table className="w-[470px]">
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
          </div>
        </div>
      </div>
    </main>
  );
}
