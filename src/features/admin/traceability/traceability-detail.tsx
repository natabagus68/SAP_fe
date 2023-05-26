import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import useTraceability from "./traceability-model";
import ChecklistIcon from "@common/components/icons-new/ChecklistIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import moment from "moment";
import React from "react"

export default function TraceabilityDetail() {
  const traceability = useTraceability();
  
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Traceability", "Details"]} />
      {traceability.isLoadingData ? (
        <div className="w-full h-[48px] flex items-center justify-center">
          <LoadingIcon
            color="black"
            className="w-[24px] h-[24px] animate-spin"
          />
        </div>
      ) : 
        <>
          <div className="rounded-md border border-[#D0D3D9] bg-white">
            <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
              <span className="text-2xl text-[#514E4E] font-bold ">
                {traceability?.type === "checklist"
                  ? "Detail Checklist"
                  : "Detail Preventive"}
              </span>
              <div className="flex items-end gap-4">
                <button
                  className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
                  onClick={() => traceability.onOpenBack()}
                >
                  <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
                  <span className="text-[#20519F] text-sm font-semibold">
                    Kembali
                  </span>
                </button>
                <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
                  <ExportIcon color="white" />
                  <span className="text-white text-sm font-semibold">
                    Export Report
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
                      <td className="px-4 py-[6px] font-semibold">{traceability.dataTraceabilityById?.machine_no}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-[6px]">Nama Mesin</td>
                      <td className="px-4 py-[6px] font-semibold">{traceability.dataTraceabilityById?.machine_name}</td>
                    </tr>
                    <tr className="bg-[#D0D3D9]">
                      <td className="px-4 py-[6px]">Pelaksana</td>
                      <td className="px-4 py-[6px] font-semibold">
                        {traceability.dataTraceabilityById?.pic}
                      </td>
                    </tr>
                    {
                      traceability.type === 'checklist' ?
                      <tr>
                        <td className="px-4 py-[6px]">Waktu Kerja</td>
                        <td className="px-4 py-[6px] font-semibold text-[#F04438]">
                          {traceability.dataTraceabilityById?.working_time}
                        </td>
                      </tr>
                      :
                      <tr>
                        <td className="px-4 py-[6px]">Interval Preventive</td>
                        <td className="px-4 py-[6px] font-semibold text-[#F04438]">
                          {traceability.dataTraceabilityById?.interval}
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
                <div className="bg-[#12B569] rounded text-white w-fit px-3 py-1 capitalize">
                  {traceability.dataTraceabilityById?.status}
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
                          <span>{traceability.dataTraceabilityById?.approval_checked_by}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="p-[1px] border rounded-full border-[#12B569] w-fit">
                            <ChecklistIcon className="w-[14px] h-[14px]" />
                          </div>
                          <span>{traceability.dataTraceabilityById?.approval_approved_by}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-base text-[#514E4E] flex items-center gap-4">
                  <span>Tanggal & Jam Checklist :</span>
                  <span className="font-semibold">{moment(traceability.dataTraceabilityById?.date).format('DD/MM/YYYY')}</span>
                </div>
                <table className="w-[442px]">
                  <tbody>
                    {
                      traceability.type === 'checklist' ?
                      <tr className="bg-[#D0D3D9]">
                        <td className="px-4 py-[6px]">Line</td>
                        <td className="px-4 py-[6px] font-semibold"></td>
                      </tr>
                      :
                      null

                    }
                    <tr className={traceability.type === 'checklist' ? '' : 'bg-[#D0D3D9]'}>
                      <td className="px-4 py-[6px]">Section</td>
                      <td className="px-4 py-[6px] font-semibold">{traceability.dataTraceabilityById?.section}</td>
                    </tr>
                    <tr className={traceability.type === 'checklist' ? 'bg-[#D0D3D9]' : ''}>
                      <td className="px-4 py-[6px]">Departemen</td>
                      <td className="px-4 py-[6px] font-semibold">{traceability.dataTraceabilityById?.department}1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-[#D0D3D9] bg-white">
            <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
              <span className="text-2xl text-[#514E4E] font-bold ">
               {traceability?.type == "checklist" ? "Laporan Checklist" : "Laporan Preventive"} 
              </span>
            </div>
            {traceability?.type == "checklist" ? (
              <table className="w-full">
                <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
                  <tr>
                    <th className="px-[32px] text-start">Sub-Mesin</th>
                    <th className="px-[32px] text-start">Deskripsi</th>
                    <th className="px-[32px] text-start">Status</th>
                    <th className="px-[32px] text-start">Rincian Not Good</th>
                  </tr>
                </thead>
                <tbody className="text-base text-[#514E4E]">
                  {
                    traceability.dataTraceabilityById?.report.map((item, i)=>(
                      <React.Fragment key={i}>
                        <tr>
                          <td className="px-[32px] border-b border-r border-[#D0D3D9]" rowSpan={item.parameter?.length + 1}>{item.submesin_name}</td>                      
                        </tr>
                        {
                          item.parameter.map((item, ii)=>(
                            <tr key={`${i}_${ii}`}>
                              <td className="px-[32px] border-r border-b border-[#D0D3D9] text-center">
                                {item.deskripsi}
                              </td>
                              <td className="px-[32px] py-[10px] border-r border-b border-[#D0D3D9] text-center ">
                                <div
                                  className={`h-[40px] w-fit px-3 text-white flex items-center justify-center capitalize ${
                                    item?.status_report == "rusak"
                                      ? "bg-[#F36960]"
                                      : item?.status_report == "ok"
                                      ? "bg-[#20519F]"
                                      : item?.status_report == "indikasi"
                                      ? "bg-[#12B569]"
                                      : item?.status_report == "telah diperbaiki"
                                      ? "bg-[#F9A63A]"
                                      : null
                                  } rounded-xl text-base`}
                                >
                                  {item.status_report}
                                </div>
                              </td>                              
                              <td className="px-[32px] border-r border-b border-[#D0D3D9] text-center">
                                <div className="flex items-center gap-6">
                                  {item.status_report == "ok" ? (
                                    "-"
                                  ) : (
                                    <button
                                      className="flex items-center gap-2 h-[40px] px-[20px] bg-[#1BBDD4]"
                                      // onClick={() => checklist.setOpenModalDetail(true)}
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
                          ))
                        }
                      </React.Fragment>
                    ))
                  }
                </tbody>
              </table>
            ) : (
              <table className="w-full">
                <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
                  <tr>
                    <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                      Sub-Machine
                    </th>
                    <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                      Parameter
                    </th>
                    <th className="px-[32px] text-start border-r border-[#D0D3D9]">
                      Status
                    </th>
                    <th className="px-[32px] text-start">Action</th>
                  </tr>
                </thead>
                <tbody className="text-base text-[#514E4E]">
                  {
                    traceability.dataTraceabilityById?.report.map((item, i)=>(
                      <React.Fragment key={i}>
                        <tr>
                          <td className="px-[32px] border-r border-b border-[#D0D3D9]" rowSpan={item.parameter?.length + 1}>
                            {item.submesin_name}
                          </td>
                        </tr>
                        {
                          item.parameter.map((item, ii)=>(
                            <tr key={`${i}_${ii}`}>                    
                              <td className="px-[32px] border-r border-b border-[#D0D3D9]">
                                {item.parameter_name}
                              </td>
                              <td className="px-[32px] border-r border-b border-[#D0D3D9]">
                                <div
                                  className={
                                    `h-[32px] w-fit px-3 flex items-center justify-center
                                    ${item?.status_report == "change"
                                    ? "text-[#F36960]"
                                    : item?.status_report == "check"
                                    ? "text-[#12B569]"
                                    : item?.status_report == "abnormal"
                                    ? "text-[#E18308]"
                                    : null }
                                  `}
                                >
                                  {item.status_report}
                                </div>
                              </td>
                              <td className="px-[32px] border-r border-b border-[#D0D3D9] py-3 ">
                                <div className="flex items-center gap-6">
                                  <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded">
                                    <EyeShowIcon color="white" />
                                    <span className="text-white text-sm font-semibold">
                                      Lihat
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </React.Fragment>
                    ))
                  }
                </tbody>
              </table>
            )}
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
        </>
      }
    </main>
  );
}
