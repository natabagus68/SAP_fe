import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import useDamage from "./damage-model";
import { Breadcrumbs } from "@common/components";

export default function DamageForm() {
  const damage = useDamage();

  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `Damage`,
          !!damage.state?.edit ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {!!damage?.damageId ? "Edit Data" : "Add Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={damage.handleSubmit(
            !!damage?.damageId ? damage.editDamage : damage.createDamage
          )}
        >
          <div className="flex flex-col w-full gap-1">
            <span>ID</span>
            <input
              disabled
              type="text"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                damage.errors.id ? "bg-red-100" : "bg-[#B8B6B6]"
              }`}
              {...damage.register("id", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Jenis Kerusakan</span>
            <input
              type="text"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                damage.errors.damage ? "bg-red-100" : "bg-white"
              }`}
              placeholder="Masukan Jenis Kerusakan"
              {...damage.register("damage", { required: true })}
            />
          </div>
        </form>
        <div className="flex items-center gap-6 pb-[32px] px-[32px]">
          {damage.isLoadingData ? (
            <button
              type="button"
              className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold cursor-wait"
            >
              <LoadingIcon
                color="white"
                className="w-[24px] h-[24px] animate-spin"
              />
            </button>
          ) : (
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan
            </button>
          )}
          <button
            className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
            type="button"
            onClick={() => damage.navigate("..")}
          >
            <span className="text-[#20519F] text-sm font-semibold">Batal</span>
          </button>
        </div>
      </div>
    </main>
  );
}
