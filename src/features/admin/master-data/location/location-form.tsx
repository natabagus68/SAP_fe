import { Breadcrumbs } from "@common/components/";
import useLocationHooks from "./location-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function LocationForm() {
  const location = useLocationHooks();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${location.type[0].toLocaleUpperCase()}${location.type.slice(1)}`,
          !!location?.id ? "Edit Data" : "Add Data",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {!!location?.id ? "Edit Data" : "Add Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={location.handleSubmit(
            !!location?.id
              ? location.type == "departemen"
                ? location.editDataDepartemen
                : location.editDataSection
              : location.type == "section"
              ? location.createDataSection
              : location.createDataDepartemen
          )}
        >
          {location.type == "departemen" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Nama Departemen</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    location.errors.name ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Nama Departemen"
                  {...location.register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Pilih Section</span>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("name")}
                      value="Alloy Casting"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Alloy Casting</span>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {location.type == "section" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Departemen</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    location.errors.department_id ? "bg-red-100" : "bg-white"
                  }`}
                  {...location.register("department_id", { required: true })}
                >
                  <option value="">Pilih Departemen</option>
                  {location.dataDepartemen.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Section</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    location.errors.name ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="section"
                  {...location.register("name", { required: true })}
                />
              </div>
            </>
          ) : null}

          <div className="flex items-center gap-6">
            {location.isLoadingData ? (
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
              onClick={() => location.navigate("..")}
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
