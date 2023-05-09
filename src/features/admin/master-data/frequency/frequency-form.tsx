import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import useFrequency from "./frequency-model";

export default function FrequencyForm() {
  const frequency = useFrequency();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `Frequency`,
          frequency.state?.edit ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {frequency?.state?.edit ? "Edit Data" : "Create Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={frequency.handleSubmit(frequency.createMesin)}
        >
          <div className="flex flex-col w-full gap-1">
            <span>No Mesin</span>
            <input
              type="text"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                frequency.errors.id ? "bg-red-100" : "bg-white"
              }`}
              placeholder="Masukan no mesin"
              {...frequency.register("id", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Nama Mesin</span>
            <input
              type="text"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                frequency.errors.frequency ? "bg-red-100" : "bg-white"
              }`}
              placeholder="Masukan nama mesin"
              {...frequency.register("frequency", { required: true })}
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
            onClick={() => frequency.navigate("..")}
          >
            <span className="text-[#20519F] text-sm font-semibold">Batal</span>
          </button>
        </div>
      </div>
    </main>
  );
}
