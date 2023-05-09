import { Breadcrumbs } from "@common/components/";
import useLocationHooks from "./location-model";

export default function LocationForm() {
  const location = useLocationHooks();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${location.type[0].toLocaleUpperCase()}${location.type.slice(1)}`,
          location?.state?.edit ? "Edit Data" : "Add Data",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {location?.state?.edit ? "Edit Data" : "Add Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={location.handleSubmit(location.createLocation)}
        >
          {location.type == "departemen" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Nama Departemen</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    location.errors.departemen ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan Nama Departemen"
                  {...location.register("departemen", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Pilih Section</span>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("section")}
                      value="Alloy Casting"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Alloy Casting</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("section")}
                      value="Extruction"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Extruction</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("section")}
                      value="Anodizing"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Anodizing</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("section")}
                      value="Painting"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Painting</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("section")}
                      value="Dies Manufacturing"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Dies Manufacturing</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      {...location.register("section")}
                      value="TPM/Utilites"
                      className="w-[24px] h-[24px]"
                    />
                    <span>TPM/Utilites</span>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {location.type == "section" ? (
            <div className="flex flex-col w-full gap-1">
              <span>Section</span>
              <input
                type="text"
                className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                  location.errors.section ? "bg-red-100" : "bg-white"
                }`}
                placeholder="section"
                {...location.register("section", { required: true })}
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
