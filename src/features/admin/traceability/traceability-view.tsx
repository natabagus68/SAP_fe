import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import useTraceability from "./traceability-model";
import Modal from "@common/components/modals/Modal";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function TraceabilityView() {
  const traceability = useTraceability();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Traceability"]} />            
        <div className="rounded-md border border-[#D0D3D9] bg-white">
          <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Traceability
            </span>
            <div className="flex items-end gap-4">
              <button
                className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
                onClick={() => traceability.setOpenModalExport(true)}
              >
                <ExportIcon color="white" />
                <span className="text-white text-sm font-semibold">
                  Export Report
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex items-center py-[18px] px-[32px] gap-4 flex-wrap border-b border-[#D0D3D9]">
            <div className="flex items-center gap-3">
              <span>Tipe Maintenance</span>
              <select
                defaultValue=""
                className="h-[33px] border border-[#D0D3D9] rounded-md text-[#514E4E] px-1 outline-none"
              >
                <option value="">Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span>Section</span>
              <select
                defaultValue=""
                className="h-[33px] border border-[#D0D3D9] rounded-md text-[#514E4E] px-1 outline-none"
              >
                <option value="">Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span>Line</span>
              <select
                defaultValue=""
                className="h-[33px] border border-[#D0D3D9] rounded-md text-[#514E4E] px-1 outline-none"
              >
                <option value="">Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span>No Mesin</span>
              <select
                defaultValue=""
                className="h-[33px] border border-[#D0D3D9] rounded-md text-[#514E4E] px-1 outline-none"
              >
                <option value="">Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span>Status</span>
              <select
                defaultValue=""
                className="h-[33px] border border-[#D0D3D9] rounded-md text-[#514E4E] px-1 outline-none"
              >
                <option value="">Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <span>Pelaksana</span>
              <select
                defaultValue=""
                className="h-[33px] border border-[#D0D3D9] rounded-md text-[#514E4E] px-1 outline-none"
              >
                <option value="">Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          

          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Tipe Maintenance</th>
                <th className="px-[32px] text-start">Departemen</th>
                <th className="px-[32px] text-start">Section</th>
                <th className="px-[32px] text-start">Line</th>
                <th className="px-[32px] text-start">No Mesin</th>
                <th className="px-[32px] text-start">Pelaksana</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">            
              {traceability?.dataTraceability?.map((item) => (
                <tr key={item?.id} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">
                    <div
                      className={`h-[32px] w-[99px] text-white flex items-center justify-center ${
                        item?.type == "checklist"
                          ? "bg-[#4D74B2]"
                          : "bg-[#F9A63A]"
                      } rounded-xl`}
                    >
                      {item?.type}
                    </div>
                  </td>
                  <td className="px-[32px]">{item?.department}</td>
                  <td className="px-[32px]">{item?.section}</td>
                  <td className="px-[32px]"></td>
                  <td className="px-[32px]">{item?.machine_no}</td>
                  <td className="px-[32px]">{item?.pic}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                        onClick={() =>
                          traceability.onOpenDetail(item?.type, item?.id)
                        }
                      >
                        <EyeShowIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Detail
                        </span>
                      </button>
                      <button>
                        <ExportIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {traceability.isLoadingData ? (
            <div className="w-full h-[48px] flex items-center justify-center">
              <LoadingIcon
                color="black"
                className="w-[24px] h-[24px] animate-spin"
              />
            </div>
            ) 
            : null 
          }
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
      
      <Modal open={traceability.openModalExport}>
        <div className="w-[430px] flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-[54px] h-[54px] bg-[#BAC9E1] rounded-full border-[8px] border-[#E9EEF5]">
              <ExportIcon color="#20519F" className="w-[26px] h-[26px]" />
            </div>
            <span className="text-[#2D2A2A] text-[24px] font-semibold">Export Report</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span>From</span>
              <input type="date" className="h-[40px] border border-[#D0D3D9] rounded px-2" />
            </div>
            <div className="flex flex-col">
              <span>To</span>
              <input type="date" className="h-[40px] border border-[#D0D3D9] rounded px-2" />
            </div>
          </div>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-sm font-semibold"
              onClick={() => traceability.setOpenModalExport(false)}
            >
              Batal
            </button>
            <button className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Export Report
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
