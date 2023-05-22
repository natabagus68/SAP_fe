import useSparepart from "./sparepart-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import gambar_part from "../../../../assets/gambar-part.png";
import drawing from "../../../../assets/Drawing.png";

export default function SparepartDetails() {
  const sparepart = useSparepart();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${sparepart.type[0].toLocaleUpperCase()}${sparepart.type.slice(1)}`,
          "Details",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Part
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => sparepart.navigate("../")}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded">
              <EditIcon color="white" />
              <span className="text-white text-sm font-semibold">Edit</span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">Informasi Part</span>
            <table className="w-[480px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Stok</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.qty_stock}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Item Code</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.item_code}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Rak</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.availability_rack_code}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Part No</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.part_no}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Part Name</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.part_name}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Brand</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.brand}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Specification</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.spec}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Unit of Measurament (UoM)</td>
                  <td className="px-4 py-[6px] font-semibold">----</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Type Kategory</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.category_name} ??
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Vendor</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.vendor_name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Cost</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Rp. {sparepart.dataSparepartById?.price}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Pengadaan</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.qty_stock}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Remark</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.remark}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Alternative Part</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.alternative_part_name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Minimum Stock</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.minimum_stock}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Delivery Time</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.delivery_time} Hari
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Maintence Rate</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.maintenance_rate}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Description</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.description}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Kategory</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.category_name}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Garansi Datang</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.arrival_warranty}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Garansi Pakai</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.usage_warranty}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Status</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {sparepart.dataSparepartById?.part_status}
                  </td>
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

