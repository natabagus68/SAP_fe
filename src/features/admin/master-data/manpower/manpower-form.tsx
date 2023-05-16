import { Breadcrumbs } from "@common/components";
import useManpower from "./manpower-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function ManpowerForm() {
  const manpower = useManpower();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${manpower.type[0].toLocaleUpperCase()}${manpower.type.slice(1)}`,
          !!manpower?.id ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {!!manpower?.id ? "Edit Data" : "Create Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={manpower.handleSubmit(
            !!manpower?.id
              ? manpower.type == "manpower"
                ? manpower.editManpower
                : manpower.editPosition
              : manpower.type == "manpower"
              ? manpower.createManpower
              : manpower.createPosition
          )}
        >
          {manpower.type == "manpower" ? (
            <div className="flex flex-col w-full gap-1">
              <span>No. Induk Pegawai</span>
              <input
                type="text"
                className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                  manpower.errors.nip ? "bg-red-100" : "bg-white"
                }`}
                placeholder="Masukan No. Induk Pegawai"
                {...manpower.register("nip", { required: true })}
              />
            </div>
          ) : null}

          <div className="flex flex-col w-full gap-1">
            <span>{manpower.type == "manpower" ? "Name" : "Nama Posisi"}</span>
            <input
              type="text"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                manpower.errors.name ? "bg-red-100" : "bg-white"
              }`}
              placeholder={
                manpower.type == "manpower"
                  ? "Masukan name"
                  : "Masukan nama posisi"
              }
              {...manpower.register("name", { required: true })}
            />
          </div>

          {manpower.type == "manpower" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Posisi</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    manpower.errors.posisi ? "bg-red-100" : "bg-white"
                  }`}
                  {...manpower.register("posisi", { required: true })}
                >
                  <option value="">Pilih posisi</option>
                  {manpower.dataPosition.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Section</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    manpower.errors.section ? "bg-red-100" : "bg-white"
                  }`}
                  {...manpower.register("section", { required: true })}
                >
                  <option value="">Pilih section</option>
                  {manpower.dataSection.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Photo Profile</span>
                <input
                  type="file"
                  className={` border border-[#D0D3D9] rounded p-1  ${
                    manpower.errors.photo ? "bg-red-100" : "bg-white"
                  }`}
                  {...manpower.register("photo")}
                />
              </div>
              <div className="w-full">
                <span
                  className={`text-[#F04438] text-center ${
                    !!manpower.message ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {manpower.message || "-"}
                </span>
              </div>
            </>
          ) : null}
          <div className="flex items-center gap-6">
            {manpower.isLoadingData ? (
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
              onClick={() => manpower.navigate("..")}
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
