import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import useCalendar from "./calendar-model";

export default function CalendarForm() {
  const calendar = useCalendar();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Schedule",
          `Calendar`,
          calendar.state?.edit ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {calendar?.state?.edit ? "Edit Data" : "Create Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          // onSubmit={frequency.handleSubmit(frequency.createMesin)}
        >
          <div className="flex flex-col w-full gap-1">
            <span>Tipe Maintenance</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.type ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("type", { required: true })}
            >
              <option value="">Pilih maintenance type</option>
              <option value="type">Maintenance 1</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Machine</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.machine ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("machine", { required: true })}
            >
              <option value="">Pilih Machine</option>
              <option value="machine">Machine 1</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
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
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Section</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.section ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("section", { required: true })}
            >
              <option value="">Pilih Section</option>
              <option value="section">Section 1</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
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
        </form>
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
      </div>
    </main>
  );
}
