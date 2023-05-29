import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import default_avatar from "../../../../assets/default_avatar.jpg";
import useManpower from "./manpower-model";
import { config } from "@common/utils";

export default function ManpowerDetails() {
  const manpower = useManpower();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={[
          "Master Data",
          `${manpower.type[0].toLocaleUpperCase()}${manpower.type.slice(1)}`,
          "Details",
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Manpower
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => manpower.navigate("../")}
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
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">Informasi Manpower</span>
            <table className={`w-[442px] ${!!!manpower?.dataManpowerById? "animate-pulse":null}`}>
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">No. Induk Pegawai</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {manpower?.dataManpowerById?.employee_no}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Nama Lengkap</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {manpower?.dataManpowerById?.name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Posisi</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {manpower?.dataManpowerById?.position_name}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Departemen</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {manpower?.dataManpowerById?.departemen_name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {manpower?.dataManpowerById?.section_name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-base text-[#514E4E]">Photo</span>
            <div className={`w-[155px] h-[155px] rounded-full border border-gray-400 overflow-hidden ${!!!manpower?.dataManpowerById? "animate-pulse":null}`}>
              {!!manpower?.dataManpowerById?.avatar ? (
                // <div className="w-full h-full bg-black"></div>
                <img
                  src={`${config.apiAssetUrl}storage/29-05-2023/master-data/avatar/fae85b5e9dd790e2af9e50000.png`}
                  alt="Default Avatar"
                  className="w-[155px] h-[155px]"
                />
              ) : (
                <img
                  src={default_avatar}
                  alt="Default Avatar"
                  className="w-[155px] h-[155px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
