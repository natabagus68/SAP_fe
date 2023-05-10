import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import useLocationHooks from "./location-model";

export default function LocationDetails() {
  const location = useLocationHooks();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${location.type[0].toLocaleUpperCase()}${location.type.slice(1)}`,
          "Details",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Location
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => location.navigate("../")}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
              onClick={() =>
                location.navigate("edit", {
                  state: {
                    edit: true,
                    type: location.type,
                    data: {
                      departemen: "departemen",
                      section: "section",
                    },
                  },
                })
              }
            >
              <EditIcon color="white" />
              <span className="text-white text-sm font-semibold">Edit</span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">
              Informasi Departemen
            </span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Nama Departemen</td>
                  <td className="px-4 py-[6px] ">Maintenance</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px]">1. Alloy Casting</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]"></td>
                  <td className="px-4 py-[6px]">2. Extrusion</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]"></td>
                  <td className="px-4 py-[6px]">3. Anodizing</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]"></td>
                  <td className="px-4 py-[6px]">4. Painting</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]"></td>
                  <td className="px-4 py-[6px]">5. Dies manufacturing</td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]"></td>
                  <td className="px-4 py-[6px]">6. TPM/Utilites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}