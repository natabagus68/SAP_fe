import { Breadcrumbs } from "@common/components";
import useManpower from "./manpower-model";

export default function ManpowerForm() {
  const manpower = useManpower();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${manpower.type[0].toLocaleUpperCase()}${manpower.type.slice(1)}`,
          manpower?.state?.edit ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {manpower?.state?.edit ? "Edit Data" : "Create Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={manpower.handleSubmit(manpower.createManpower)}
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
                  <option value="1d8d51b0-427c-47f6-922f-f824901817c4">
                    Posisi 1
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Departemen</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    manpower.errors.departemen ? "bg-red-100" : "bg-white"
                  }`}
                  {...manpower.register("departemen", { required: true })}
                >
                  <option value="">Pilih departemen</option>
                  <option value="xxxxxxxx-427c-47f6-922f-f824901817c4">
                    Departemen 1
                  </option>
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
                  <option value="a147cbb7-39be-496e-9dd0-cafb597c3753">
                    Section 1
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Photo Profile</span>
                <input
                  type="file"
                  className={` border border-[#D0D3D9] rounded p-1  ${
                    manpower.errors.photo ? "bg-red-100" : "bg-white"
                  }`}
                  {...manpower.register("photo", { required: true })}
                />
              </div>
            </>
          ) : null}

          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan
            </button>
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
