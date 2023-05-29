import usePreventive from "./preventive-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ChecklistIcon from "@common/components/icons-new/ChecklistIcon";
import preventiveIcon from "@common/components/icons-new/ChecklistIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import Modal from "@common/components/modals/Modal";
import gambar_part from "../../../../assets/Gambar-part.png";

export default function PreventiveDetail() {
  const preventive = usePreventive();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Report", "Preventive", "Details"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Preventive
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => preventive.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <ExportIcon color="white" />
              <span className="text-white text-sm font-semibold">
                Download Report
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">
              Informasi Maintenance
            </span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">No Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.machine_no}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Nama Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.machine_name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Pelaksana</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.pic}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Interval Preventive</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.interval}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Waktu Kerja</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.working_time}
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              className={`  ${
                preventive.dataPreventiveById?.status == "done"
                  ? "bg-[#12B569]"
                  : preventive.dataPreventiveById?.status == "waiting"
                  ? "bg-[#E18308]"
                  : preventive.dataPreventiveById?.status == "rejected"
                  ? "bg-[#DA3E33]"
                  : null
              } rounded text-white w-fit px-3 py-1`}
            >
              {preventive.dataPreventiveById?.status}
            </div>

            <table className="w-fit">
              <thead>
                <tr>
                  <th className="text-start pr-[80px] pb-4">Diperiksa</th>
                  <th className="text-start pb-4">Disetujui</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                        <ChecklistIcon className="w-[14px] h-[14px]" />
                      </div>
                      <span>{preventive.dataPreventiveById?.checkedBy}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                        <ChecklistIcon className="w-[14px] h-[14px]" />
                      </div>
                      <span>{preventive.dataPreventiveById?.approvedBy}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-base text-[#514E4E] flex items-center gap-4">
              <span>Tanggal & Jam Checklist :</span>
              <span className="font-semibold">
                {preventive.dataPreventiveById?.date}
              </span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.section}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Departemen</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {preventive.dataPreventiveById?.department}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Laporan Preventive
          </span>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Sub-Mechine
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Parameter
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Status
              </th>
              <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            {preventive.dataPreventiveById?.report?.map((item, i) => (
              <>
                <tr key={i}>
                  <td
                    rowSpan={item.parameter?.length + 1}
                    className="px-[32px] border-r border-b border-[#D0D3D9] text-center"
                  >
                    {item.submesin_name} {item.parameter?.length}
                  </td>
                </tr>
                {(item.parameter || []).map((item, i, ii) => (
                  <tr key={`${i}_${ii}`}>
                    <td className="px-[32px] border-r border-b border-[#D0D3D9] text-center">
                      {item.parameter_name}
                    </td>
                    <td className="px-[32px] py-[10px] border-r border-b border-[#D0D3D9] text-center ">
                      <div
                        className={`h-[40px] w-fit px-3 flex items-center justify-center ${
                          item?.status_report == "check"
                            ? "text-[#10A560]"
                            : item?.status_report == "abnormal"
                            ? "text-[#E18308]"
                            : item?.status_report == "change"
                            ? "text-[#DA3E33]"
                            : null
                        } rounded-xl text-base`}
                      >
                        {item.status_report}
                      </div>
                    </td>
                    <td className="px-[32px] border-b py-[10px]">
                      <div className="flex items-center gap-6">
                        {item.status_report == "check" || "null" ? (
                          "-"
                        ) : (
                          <button
                            className="flex items-center gap-2 h-[40px] px-[20px] bg-[#1BBDD4]"
                            onClick={() => preventive.setOpenModalDetail(true)}
                          >
                            <EyeShowIcon color="white" />
                            <span className="text-white text-sm font-semibold">
                              Lihat
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color="#B8B6B6"
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            1
          </div>
          <button className="px-4 h-[40px] text-[#20519F] border gap-2 border-[#20519F] rounded flex items-center justify-center">
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color="#20519F"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
