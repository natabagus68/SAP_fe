import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import useCalendar from "./calendar-model";

export default function CalendarRemark() {
  const calendar = useCalendar();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Schedule", `Calendar`, "Remark"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Add Remark</span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={calendar.handleSubmit(calendar.createRemark)}
        >
          <div className="flex flex-col w-full gap-1">
            <span>Date</span>
            <input
              type="date"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                calendar.errors.date ? "bg-red-100" : "bg-white"
              }`}
              {...calendar.register("date", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Remark</span>
            <textarea
              placeholder="Masukkan Deskripsi Remark"
              className={`h-[171px] border border-[#D0D3D9] rounded p-2 ${
                calendar.errors.deskripsi ? "bg-red-100" : "bg-white"
              }`}
              maxLength={200}
              {...calendar.register("deskripsi", { required: true })}
            />
            <span className="text-end">{calendar.maxDesc}/200</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan
            </button>
            <button
              className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
              type="button"
              onClick={() => calendar.navigate("..")}
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
