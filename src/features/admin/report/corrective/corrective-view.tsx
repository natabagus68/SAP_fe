import useCorrective from "./corrective-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import Modal from "@common/components/modals/Modal";

export default function CorrectiveView() {
  const corrective = useCorrective();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Report", "Corective"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Corrective Report
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() => corrective.setOpenModalExport(true)}
            >
              <ExportIcon color="white" />
              <span className="text-white text-sm font-semibold">
                Export Report
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex items-center py-[18px] px-[32px] gap-4 flex-wrap border-b border-[#D0D3D9] justify-between">
          <div className="flex items-center gap-3">
            <span>Tanggal Checklist</span>
            <input
              type="date"
              className="h-[40px] border border-[#D0D3D9] rounded px-2"
            />
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
          <div className="relative space-x-10">
            <div className="flex items-center justify-end gap-3">
              <span>Search</span>
              <div className="absolute flex items-center p-[8px]">
                <SearchIcon color="black" />
              </div>
              <input
                type="search"
                className="h-[40px] border border-[#D0D3D9] rounded px-2"
                placeholder="search"
              />
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">ID Corrective</th>
              <th className="px-[32px] text-start">Tanggal Corrective</th>
              <th className="px-[32px] text-start">No Machine</th>
              <th className="px-[32px] text-start">Pelaksana</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            {corrective?.dataCorrective?.map((item) => (
              <tr key={item?.id} className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">{item?.idPreventive}</td>
                <td className="px-[32px]">{item?.date}</td>
                <td className="px-[32px]">{item?.noMesin}</td>
                <td className="px-[32px]">{item?.pelaksana}</td>

                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                      onClick={() => corrective.navigate("details")}
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

      <Modal open={corrective.openModalExport}>
        <div className="w-[430px] flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-[54px] h-[54px] bg-[#BAC9E1] rounded-full border-[8px] border-[#E9EEF5]">
              <ExportIcon color="#20519F" className="w-[26px] h-[26px]" />
            </div>
            <span className="text-[#2D2A2A] text-[24px] font-semibold">
              Export Report
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span>From</span>
              <input
                type="date"
                className="h-[40px] border border-[#D0D3D9] rounded px-2"
              />
            </div>
            <div className="flex flex-col">
              <span>To</span>
              <input
                type="date"
                className="h-[40px] border border-[#D0D3D9] rounded px-2"
              />
            </div>
          </div>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-sm font-semibold"
              onClick={() => corrective.setOpenModalExport(false)}
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
