import useSparepart from "./sparepart-model";
import { Breadcrumbs } from "@common/components";
import settings from "../../../../assets/svg/settings.svg";
import socket from "../../../../assets/svg/socket.svg";
import toolbox from "../../../../assets/svg/toolbox.svg";
import rawoil from "../../../../assets/svg/raw-oil.svg";
import shaft from "../../../../assets/svg/shaft.svg";
import mariagge from "../../../../assets/svg/marriage.svg";
import fastener from "../../../../assets/svg/fastener.svg";

export default function SparepartForm() {
  const sparepart = useSparepart();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${sparepart.type[0].toLocaleUpperCase()}${sparepart.type.slice(1)}`,
          sparepart.state?.edit ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {sparepart?.state?.edit ? "Edit Data" : "Add Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={sparepart.handleSubmit(sparepart.createSparepart)}
        >
          {sparepart.type == "part" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Kategory</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.kategory ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("kategory", { required: true })}
                >
                  <option value="">Pilih Kategory</option>
                  <option value="section">Kategory 1</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Item Code</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.itemCode ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Item Code"
                  {...sparepart.register("itemCode", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Availability</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.availability ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("availability", { required: true })}
                >
                  <option value="">Pilih Availability</option>
                  <option value="section">Availability 1</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Rak</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.rak ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("rak", { required: true })}
                >
                  <option value="">Pilih Rak</option>
                  <option value="section">Rak 1</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Part No</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.partNo ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Part No"
                  {...sparepart.register("partNo", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Part Name</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.partName ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Part Name"
                  {...sparepart.register("partName", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Brand</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.brand ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Brand"
                  {...sparepart.register("brand", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Specification</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.specification ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Specification"
                  {...sparepart.register("specification", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Unit of Measurement</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.uom ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Unit of Measurement"
                  {...sparepart.register("uom", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Maintence Rate</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.maintenceRate ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan maintence Rate"
                  {...sparepart.register("maintenceRate", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Vendor</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.vendor ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Vendor"
                  {...sparepart.register("vendor", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Description</span>
                <textarea
                  className={`h-[171px] border border-[#D0D3D9] rounded p-2 ${
                    sparepart.errors.description ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("description", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Part Image</span>
                <input
                  type="file"
                  className={` border border-[#D0D3D9] rounded p-1  ${
                    sparepart.errors.gambarPart ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("gambarPart", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Drawing</span>
                <input
                  type="file"
                  className={` border border-[#D0D3D9] rounded p-1  ${
                    sparepart.errors.drawing ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("drawing", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Category Type</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.typeKategory ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("typeKategory", { required: true })}
                >
                  <option value="">Pilih Category Type</option>
                  <option value="section">Category Type 1</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Stok</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.stock ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Category Type"
                  {...sparepart.register("stock", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Minimun Stok</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.minStok ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Category Type"
                  {...sparepart.register("minStok", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Remark</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.remark ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("remark", { required: true })}
                >
                  <option value="">Pilih Remark</option>
                  <option value="section">Remark 1</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Alternative Part</span>
                <select
                  disabled
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.alternativePart ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("alternativePart", { required: true })}
                >
                  <option value="">Pilih Alternative Part</option>
                  <option value="section">Alternative Part 1</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Delivery Time</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.deliveryTime ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Delivery Time"
                  {...sparepart.register("deliveryTime", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Garansi Datang</span>
                <input
                  type="date"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.garansiDatang ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Garansi Datang"
                  {...sparepart.register("garansiDatang", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Garansi Pakai</span>
                <input
                  type="date"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.garansiPakai ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Garansi Pakai"
                  {...sparepart.register("garansiPakai", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Status</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.status ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Status"
                  {...sparepart.register("status", { required: true })}
                />
              </div>
            </>
          ) : null}

          {sparepart.type == "kategory-inventory" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Nama Kategory</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.kategory ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Nama Kategory"
                  {...sparepart.register("kategory", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Icon Kategory</span>
                <div className="flex gap-6 py-4 item-center">
                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="setting"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={settings} alt="icon-kategory" />
                    </span>
                  </div>

                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="socket"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={socket} alt="icon-kategory" />
                    </span>
                  </div>

                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="fastener"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={fastener} alt="icon-kategory" />
                    </span>
                  </div>

                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="shaft"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={shaft} alt="icon-kategory" />
                    </span>
                  </div>

                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="mariagge"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={mariagge} alt="icon-kategory" />
                    </span>
                  </div>

                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="rawoil"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={rawoil} alt="icon-kategory" />
                    </span>
                  </div>

                  <div className="flex border p-4 gap-2 items-start">
                    <input
                      type="checkbox"
                      {...sparepart.register("iconKategory")}
                      value="toolbox"
                      className="w-[12px] h-[12px]"
                    />
                    <span>
                      <img src={toolbox} alt="icon-kategory" />
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {sparepart.type == "availability" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>ID</span>
                <input
                  disabled
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.id ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan ID"
                  {...sparepart.register("id", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Rak</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.rak ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Rak"
                  {...sparepart.register("rak", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Section</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    sparepart.errors.availability ? "bg-red-100" : "bg-white"
                  }`}
                  {...sparepart.register("availability", { required: true })}
                >
                  <option value="">Pilih section</option>
                  <option value="section">Section 1</option>
                </select>
              </div>
            </>
          ) : null}

          {sparepart.type == "kategory-sparepart" ? (
            <div className="flex flex-col w-full gap-1">
              <span>Kategory Type</span>
              <input
                disabled
                type="text"
                className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                  sparepart.errors.typeKategory ? "bg-red-100" : "bg-white"
                }`}
                placeholder="Masukan Kategory Type"
                {...sparepart.register("typeKategory", { required: true })}
              />
            </div>
          ) : null}

          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan
            </button>
            <button
              className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
              type="button"
              onClick={() => sparepart.navigate("..")}
            >
              <span className="text-[#20519F] text-sm font-semibold">
                Batal
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
