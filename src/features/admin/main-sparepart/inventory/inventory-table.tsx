import { Breadcrumbs } from "@common/components";
import useInventory from "./inventory-model";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";

export default function InventoryTable() {
  const inventory = useInventory();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Sparepart",
          `Inventory`,
          `${inventory.type[0].toLocaleUpperCase()}${inventory.type.slice(1)}`,
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">{inventory.type[0].toLocaleUpperCase()}{inventory.type.slice(1)}</span>
        </div>
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <div className="flex items-center gap-2  border border-[#D0D3D9] rounded px-2">
            <SearchIcon color="#B8B6B6" className="w-[18px] h-[18px]" />
            <input
              type="search"
              className="h-[40px] outline-none w-[180px]"
              placeholder="Cari"
            />
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">Part Name</th>
              <th className="px-[32px] text-start">Item Code</th>
              <th className="px-[32px] text-start">Part No</th>
              <th className="px-[32px] text-start">Availability</th>
              <th className="px-[32px] text-start">Stok</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px]">Pillow Block Bearing</td>
              <td className="px-[32px]">AM1214</td>
              <td className="px-[32px]">0834</td>
              <td className="px-[32px]">B001</td>
              <td className="px-[32px]">123</td>
              <td className="px-[32px]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                    onClick={() => inventory.navigate("details")}
                  >
                    <EyeShowIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Detail
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
    </main>
  );
}
