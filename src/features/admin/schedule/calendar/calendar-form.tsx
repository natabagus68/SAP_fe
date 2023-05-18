import { Breadcrumbs } from "@common/components";
import useCalendar from "./calendar-model";
import { useEffect } from "react";

export default function CalendarForm() {
  const calendar = useCalendar();
  useEffect(() => {
    calendar.getDataMachine();
    calendar.getDataSection();
  }, []);
  // console.log(calendar.dataSection);
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Schedule",
          `Calendar`,
          calendar.state?.edit ? "Edit" : "Create",
        ]}
      />
      <form
        className="rounded-md border border-[#D0D3D9] bg-white"
        onSubmit={calendar.handleSubmit(calendar.createMaintenance)}
      >
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {calendar?.state?.edit ? "Edit Data" : "Create Data"}
          </span>
        </div>
        <div className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap">
          <div className="flex flex-col w-full gap-1">
            <span>Tipe Maintenance</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.type ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("type", { required: true })}
            >
              <option value="">Pilih maintenance type</option>
              <option value="corrective">Corrective</option>
              <option value="preventive">Preventive</option>
              <option value="checklist">Checklist</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Machine</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.machine_id ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("machine_id", { required: true })}
            >
              <option value="">Pilih Machine</option>
              {calendar.dataMesin.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="flex flex-col w-full gap-1">
            <span>Departemen</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.departemen ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("departemen", { required: true })}
            >
              <option value="">Pilih Departemen</option>
              <option value="departemen">Departemen 1</option>
            </select>
          </div> */}
          <div className="flex flex-col w-full gap-1">
            <span>Section</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.section_id ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("section_id", { required: true })}
            >
              <option value="">Pilih Section</option>
              {calendar.dataSection.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="flex flex-col w-full gap-1">
            <span>Range Tanggal Aktif</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.range ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("range", { required: true })}
            >
              <option value="">Pilih range tanggal aktif</option>
              <option value="range">Range 1</option>
            </select>
          </div> */}
          <div className="flex items-end gap-4">
            <div className="flex flex-col w-full gap-1">
              <span>Range Tanggal Aktif</span>
              <input
                type="number"
                className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                  calendar.errors.range ? "bg-red-100" : "bg-white"
                }`}
                placeholder="Pilih range tanggal aktif"
                {...calendar.register("range", { required: true })}
              />
            </div>
            <div className="flex items-center gap-3 h-[40px] ">
              <div className="flex items-center gap-1">
                <input
                  defaultChecked
                  type="radio"
                  className="w-[24px] h-[24px] cursor-pointer"
                  value="Bulan"
                  {...calendar.register("range_type", { required: true })}
                />
                <span>Bulan</span>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  className="w-[24px] h-[24px] cursor-pointer"
                  value="Minggu"
                  {...calendar.register("range_type", { required: true })}
                />
                <span>Minggu</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Tanggal Maintenance Dimulai</span>
            <input
              type="date"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.date ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("date", { required: true })}
            />
          </div>
        </div>
        <div className="flex items-center gap-6 pb-[32px] px-[32px]">
          <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
            Simpan
          </button>
          <button
            className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
            type="button"
            onClick={() => calendar.navigate("..")}
          >
            <span className="text-[#20519F] text-sm font-semibold">Batal</span>
          </button>
        </div>
      </form>
    </main>
  );
}
