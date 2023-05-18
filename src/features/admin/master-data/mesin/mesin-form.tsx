import { Breadcrumbs } from "@common/components";
import useMesin from "./mesin-model";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";

export default function MesinForm() {
  const mesin = useMesin();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${mesin.type[0].toLocaleUpperCase()}${mesin.type.slice(1)}`,
          !!mesin?.id ? "Edit" : "Create",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {!!mesin?.id ? "Edit Data" : "Create Data"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={mesin.handleSubmit(
            !!mesin?.id
              ? mesin.type == "mesin"
                ? mesin.editMesin
                : mesin.type == "sub-mesin"
                ? mesin.editSubmesin
                : mesin.type == "parameter"
                ? mesin.editParameter
                : mesin.type == "indikator"
                ? mesin.editIndikator
                : mesin.editUom
              : mesin.type == "mesin"
              ? mesin.createMesin
              : mesin.type == "sub-mesin"
              ? mesin.createSubmesin
              : mesin.type == "parameter"
              ? mesin.createParameter
              : mesin.type == "indikator"
              ? mesin.createIndikator
              : mesin.createUom
          )}
        >
          {mesin.type == "mesin" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>No Mesin</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.no ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan no mesin"
                  {...mesin.register("no", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Nama Mesin</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.name ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan nama mesin"
                  {...mesin.register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Section</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.section ? "bg-red-100" : "bg-white"
                  }`}
                  {...mesin.register("section", { required: true })}
                >
                  <option value="">Pilih section</option>
                  {mesin.dataSection.map((item, i) => (
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
                    mesin.errors.photo ? "bg-red-100" : "bg-white"
                  }`}
                  {...mesin.register("photo", { required: true })}
                />
              </div>
            </>
          ) : null}
          {mesin.type == "sub-mesin" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>No. Sub-Mesin</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.sub_machine_no ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan no. sub-mesin"
                  {...mesin.register("sub_machine_no", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Sub-Mesin</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.name ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan sub-mesin"
                  {...mesin.register("name", { required: true })}
                />
              </div>
            </>
          ) : null}
          {mesin.type == "parameter" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Parameter</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.name ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukan nama Departemen"
                  {...mesin.register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Indikator</span>
                <select
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.indikator ? "bg-red-100" : "bg-white"
                  }`}
                  {...mesin.register("indikator", { required: true })}
                >
                  <option value="">Pilih Indikator</option>
                  {mesin.dataIndikator.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <span>Variable</span>
                <div className="flex gap-4 items-center">
                  {/* looping variable */}
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      {...mesin.register("variable")}
                      value="status"
                      defaultChecked
                      className="w-[24px] h-[24px]"
                    />
                    <span>Status</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      {...mesin.register("variable")}
                      value="form"
                      className="w-[24px] h-[24px]"
                    />
                    <span>Form</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-full gap-4 p-4 border border-[#D0D3D9]">
                <span>Variable 1</span>
                <div className="flex flex-col w-full gap-1">
                  <span>Unit of Measurement</span>
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      className={`h-[40px] border border-[#D0D3D9] w-full rounded px-2 ${
                        mesin.errors.uom ? "bg-red-100" : "bg-white"
                      }`}
                      placeholder="Masukan UoM"
                      {...mesin.register("uom", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <span>Batas Atas</span>
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      className={`h-[40px] border border-[#D0D3D9] w-full rounded px-2 ${
                        mesin.errors.batasAtas ? "bg-red-100" : "bg-white"
                      }`}
                      placeholder="Masukan batas atas"
                      {...mesin.register("batasAtas", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <span>Batas Bawah</span>
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      className={`h-[40px] border border-[#D0D3D9] w-full rounded px-2 ${
                        mesin.errors.batasBawah ? "bg-red-100" : "bg-white"
                      }`}
                      placeholder="Masukan batas bawah"
                      {...mesin.register("batasBawah", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 h-[46px] rounded text-[#D0D3D9] font-semibold text-sm w-full">
                <div className="w-[20px] h-[20px] border-2 border-[#D0D3D9] rounded-full flex items-center justify-center">
                  <PlusIcon color="#D0D3D9" />
                </div>
                <span>Add Variable</span>
              </button>
            </>
          ) : null}
          {mesin.type == "indikator" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Deskripsi Indikator</span>
                <textarea
                  placeholder="Masukkan Deskripsi Indikator"
                  className={`h-[171px] border border-[#D0D3D9] rounded p-2 ${
                    mesin.errors.deskripsi ? "bg-red-100" : "bg-white"
                  }`}
                  maxLength={100}
                  {...mesin.register("deskripsi", { required: true })}
                />
                <span className="text-end">{mesin.maxDesc}/100</span>
              </div>
            </>
          ) : null}
          {mesin.type == "uom" ? (
            <>
              <div className="flex flex-col w-full gap-1">
                <span>Unit of Measurement</span>
                <input
                  type="text"
                  className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                    mesin.errors.uom ? "bg-red-100" : "bg-white"
                  }`}
                  placeholder="Masukkan unit of measurement"
                  {...mesin.register("uom", { required: true })}
                />
              </div>
            </>
          ) : null}

          {mesin.type != "mesin" ? (
            <div className="flex items-center gap-6">
              <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
                Simpan
              </button>
              <button
                className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
                type="button"
                onClick={() => mesin.navigate("..")}
              >
                <span className="text-[#20519F] text-sm font-semibold">
                  Batal
                </span>
              </button>
            </div>
          ) : null}
        </form>
      </div>

      {mesin.type == "mesin" ? (
        <div className="rounded-md border border-[#D0D3D9] bg-white">
          <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Informasi Sub-Mesin
            </span>
            <div className="flex items-end gap-4">
              <button className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded bg-[#1BBDD4]">
                <PlusIcon color="white" />
                <span className="text-white text-sm font-semibold">
                  Tambah Sub-Mesin
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex gap-[160px]">
            <table className="w-full">
              <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
                <tr>
                  <th className="px-[32px] text-start">Nama Sub-Mesin</th>
                  <th className="px-[32px] text-start">Parameter</th>
                  <th className="px-[32px] text-start">Jumlah Interval</th>
                  <th className="px-[32px] text-start">Frequency</th>
                </tr>
              </thead>
              <tbody className="text-base text-[#514E4E]">
                <tr className="border-b border-[#D0D3D9]">
                  <td className="px-[32px] py-2">
                    <div className="flex flex-col gap-2">
                      <select className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F]">
                        <option>Pilih Sub-Mesin</option>
                      </select>
                      <button className="flex items-center gap-2 h-[46px] w-[200px] px-[20px] rounded bg-[#F04438]">
                        <TrashIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Delete Sub-Mesin
                        </span>
                      </button>
                    </div>
                  </td>
                  <td className="px-[32px] py-2">
                    <div className="flex flex-col gap-2">
                      <select className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F]">
                        <option>Pilih Parameter</option>
                      </select>
                      <select className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F]">
                        <option>Pilih Parameter</option>
                      </select>
                      <button className="flex items-center gap-2 h-[46px] w-[200px] px-[20px] rounded bg-[#1BBDD4]">
                        <PlusIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Tambah Parameter
                        </span>
                      </button>
                    </div>
                  </td>
                  <td className="px-[32px]" style={{ verticalAlign: "top" }}>
                    <div className="flex flex-col gap-2 py-2">
                      <input
                        type="text"
                        className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F] px-3"
                        placeholder="Masukan jumlah interval"
                      />
                      <input
                        type="text"
                        className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F] px-3"
                        placeholder="Masukan jumlah interval"
                      />
                    </div>
                  </td>
                  <td className="px-[32px]" style={{ verticalAlign: "top" }}>
                    <div className="flex flex-col gap-2 py-2">
                      <div className="flex gap-2">
                        <select className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F]">
                          <option>Pilih Frequency</option>
                        </select>
                        <button className="w-[46px] h-[46px] bg-[#F04438] rounded-md flex items-center justify-center">
                          <TrashIcon className="w-[28px] h-[28px]" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <select className="w-[200px] h-[46px] flex items-center justify-center border border-[#20519F] text-[#20519F]">
                          <option>Pilih Frequency</option>
                        </select>
                        <button className="w-[46px] h-[46px] bg-[#F04438] rounded-md flex items-center justify-center">
                          <TrashIcon className="w-[28px] h-[28px]" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {mesin.type == "mesin" ? (
        <div className="rounded-md border border-[#D0D3D9] bg-white">
          <div className="w-full flex items-center gap-6 py-[18px] px-[32px] border-b border-[#D0D3D9]">
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan
            </button>
            <button
              className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
              type="button"
              onClick={() => mesin.navigate("..")}
            >
              <span className="text-[#20519F] text-sm font-semibold">
                Batal
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
