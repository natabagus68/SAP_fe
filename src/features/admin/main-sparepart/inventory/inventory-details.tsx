import React from "react";
import useInventory from "./inventory-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import gambar_part from "../../../../assets/Gambar-part.png";
import drawing from "../../../../assets/Drawing.png";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";
import moment from "moment";

export default function InventoryDetails() {
  const inventory = useInventory();

  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Sparepart",
          `Inventory`,
          `${inventory.type[0].toLocaleUpperCase()}${inventory.type.slice(1)}`,
          "Details",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        {inventory.isLoadingData ? (
          <div className="w-full h-[48px] flex items-center justify-center">
            <LoadingIcon
              color="black"
              className="w-[24px] h-[24px] animate-spin"
            />
          </div>
        ) : inventory.messageError ? (
          <div className="w-full flex flex-col items-center py-[60px]">
            <img src={empty_data_table} alt="Empty data table" className="" />
            <span className="text-[#514E4E] text-2xl font-bold">
              Tidak ada data
            </span>
          </div>
        ) : (
          <>
            <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
              <span className="text-2xl text-[#514E4E] font-bold ">
                Detail Part {inventory.type[0].toLocaleUpperCase()}
                {inventory.type.slice(1)}
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
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.qty_stock}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Item Code</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.item_code}
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Availability</td>
                      <td className="px-4 py-[6px] font-semibold">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Rak</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.availability_rack_code
                        }
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Part No</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.part_no}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Part Name</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.name}
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Brand</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.brand}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Specification</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.spec}
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">
                        Unit of Measurament (UoM){" "}
                      </td>
                      <td className="px-4 py-[6px] font-semibold">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Type Kategory </td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.category_name
                        }
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Vendor</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.vendor_name}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Cost</td>
                      <td className="px-4 py-[6px] font-semibold">
                        Rp. {inventory?.dataInventoryKategorySparepart?.price}
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Pengadaan</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.procurement_type
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Remark</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.remark}
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Alternative Part</td>
                      <td className="px-4 py-[6px] font-semibold">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Minimum Stock</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.minimum_stock
                        }
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Delivery Time</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.delivery_time
                        }{" "}
                        Hari
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Maintence Rate</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.maintenance_rate
                        }
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Description</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart?.description}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Kategory</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {
                          inventory?.dataInventoryKategorySparepart
                            ?.category_name
                        }
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Garansi Datang</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {moment(
                          inventory?.dataInventoryKategorySparepart
                            ?.arrival_warranty
                        ).format("DD/MM/YYYY")}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Garansi Pakai</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {moment(
                          inventory?.dataInventoryKategorySparepart
                            ?.usage_warranty
                        ).format("DD/MM/YYYY")}
                      </td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Status</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {inventory?.dataInventoryKategorySparepart
                          ?.part_status ?? "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-6 space-y-4">
                <span className="text-2xl text-[#514E4E]">Gambar Part</span>
                <div className="w-auto h-auto overflow-hidden ">
                  {inventory?.dataInventoryKategorySparepart?.image_path && (
                    <img src={gambar_part} alt="Gambar-Part" />
                  )}
                </div>
                <span className="text-2xl text-[#514E4E]">Drawing</span>
                <div className="w-auto h-auto overflow-hidden ">
                  {inventory?.dataInventoryKategorySparepart
                    ?.image_drawing_path && <img src={drawing} alt="drawing" />}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
