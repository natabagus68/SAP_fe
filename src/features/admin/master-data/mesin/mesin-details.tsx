import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import useMesin from "./mesin-model";
import ReloadIcon from "@common/components/icons-new/ReloadIcon";

export default function MesinDetails() {
  const mesin = useMesin();
  const dummy = [
    {
      name: "Dump Feeder",
      parameter: ["Rantai Conveyor", "Mess Belt Conveyor"],
      jumlahInterval: [3, 2],
      frequency: [3, 7],
    },
    {
      name: "Panel Control Feeder",
      parameter: ["Rantai Conveyor", "Shaft & Bearing"],
      jumlahInterval: [3, 2, 5],
      frequency: [3, 7, 5],
    },
  ];
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${mesin.type[0].toLocaleUpperCase()}${mesin.type.slice(1)}`,
          "Details",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Mesin
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => mesin.navigate("../")}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded">
              <EditIcon color="white" />
              <span className="text-white text-sm font-semibold">Edit</span>
            </button>
          </div>
        </div>

        {mesin.type == "mesin" ? (
          <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
            <div className="flex flex-col gap-6">
              <span className="text-2xl text-[#514E4E]">Detail Mesin</span>
              <table className="w-[442px]">
                <tbody>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">No Mesin</td>
                    <td className="px-4 py-[6px] font-semibold">
                      {mesin?.state?.data?.no}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-[6px]">Nama Mesin</td>
                    <td className="px-4 py-[6px] font-semibold">
                      {mesin?.state?.data?.name}
                    </td>
                  </tr>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">Section</td>
                    <td className="px-4 py-[6px] font-semibold">
                      {mesin?.state?.data?.section}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-base text-[#514E4E]">Gambar Mesin</span>
              <div className="w-[155px] h-[155px] rounded-full overflow-hidden">
                <img src={mesin?.state?.data?.photo} alt="Default Avatar" />
              </div>
            </div>
          </div>
        ) : null}

        {mesin.type == "sub-mesin" ? (
          <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
            <div className="flex flex-col gap-6">
              <span className="text-2xl text-[#514E4E]">Detail Sub-Mesin</span>
              <table className="w-[442px]">
                <tbody>
                  <tr className="bg-[#D0D3D9]">
                    <td className="px-4 py-[6px]">Sub-Mesin</td>
                    <td className="px-4 py-[6px] font-semibold">
                      Panel Control Feeder
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-[6px]">No. Sub-Mesin</td>
                    <td className="px-4 py-[6px] font-semibold">600342</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>

      {mesin.type == "mesin" ? (
        <div className="rounded-md border border-[#D0D3D9] bg-white">
          <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Informasi Sub-Mesin
            </span>
            <div className="flex items-end gap-4">
              <button className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded bg-[#1BBDD4]">
                <ReloadIcon color="white" />
                <span className="text-white text-sm font-semibold">Sync</span>
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
              <tbody className="text-base text-[#514E4E] ">
                {dummy?.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#D0D3D9] ${
                      i % 2 == 1 ? "bg-[#FAFAFB]" : null
                    }`}
                  >
                    <td className="px-[32px]">{item?.name}</td>
                    <td className="px-[32px]">
                      <div className="flex flex-col gap-2 py-2">
                        {item?.parameter?.map((item2, i2) => (
                          <span key={`${i}-${i2}`}>{item2}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-[32px]">
                      <div className="flex flex-col gap-2 py-2">
                        {item?.jumlahInterval?.map((item3, i3) => (
                          <div
                            key={`${i}--${i3}`}
                            className="w-[200px] h-[46px] flex items-center justify-center border bg-white"
                          >
                            {item3}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-[32px]">
                      <div className="flex flex-col gap-2 py-2">
                        {item?.frequency?.map((item4, i4) => (
                          <select
                            key={`${i}-/-${i4}`}
                            className="w-[200px] h-[46px] flex items-center justify-center border"
                          >
                            <option>{item4}</option>
                          </select>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </main>
  );
}
