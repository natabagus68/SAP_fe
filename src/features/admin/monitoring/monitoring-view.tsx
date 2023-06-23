import { Breadcrumbs } from "@common/components";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import Datepicker from "react-tailwindcss-datepicker";
import Pagination from "@common/components/pagination/Pagination";
import CastingModalView from "./results/casting-modal-detail";
import MachiningModalDetail from "./results/machining-modal-detail";
import useMonitoringModel from "./monitoring-model";

export default function MonitoringView() {
  const data = useMonitoringModel();
  return (
    <div className="text-[#313030]">
      <Breadcrumbs items={["Monitoring"]} />
      <div className="border border-[#D0D3D9] rounded-md px-8 py-6 mt-[18px] bg-[#FFF]">
        <h1 className="text-2xl font-[700] ">Monitoring</h1>
        <span className="text-[#667085]">Tracking product data.</span>
        <div className="rounded bg-[#F0F1F3] my-4">
          <div className="relative w-full p-4 flex justify-between">
            <SearchIcon
              color={"#667085"}
              className="absolute top-[38%] left-[2.5%]"
            />
            <input
              type="search"
              name="search"
              placeholder="Search by username, email, role..."
              className="h-[40px] w-[40%] border outline-none rounded placeholder:text-[#D0D3D9] placeholder:text-sm pl-8 active:border-[#E7EAEE]"
            />
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm w-[40%] text-[#667085]">
                  Date Display
                </span>
                <Datepicker
                  value={data.date}
                  onChange={data.onSelectDate}
                  separator={"-"}
                  displayFormat="MM DD, YYYY"
                  showFooter={true}
                  showShortcuts={true}
                  inputClassName={"dark:bg-[#FFF] py-2 px-6 rounded-md text-sm"}
                  placeholder="Select Date Transaction"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#667085]">Sort by</span>
                <select
                  name="sorting"
                  id="sorting"
                  className="px-4 py-2 border border-[#D0D3D9] bg-[#FFF] rounded text-sm"
                >
                  <option value="ASC">Last Update</option>
                  <option value="DSC">First Update</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-scroll">
          <table className="w-full">
            <thead className="border-t border-b bg-[#F0F1F3] border-gray-400 text-[#667085]">
              <tr className="text-sm text-left whitespace-nowrap">
                <th className="pl-4 py-4 font-[600]">QR Tag Number</th>
                <th className="pl-4 py-4 font-[600]">Item Desc</th>
                <th className="pl-4 py-4 font-[600]">Quantity</th>
                <th className="pl-4 py-4 font-[600]">Unit</th>
                <th className="pl-4 py-4 font-[600]">Item ID</th>
                <th className="pl-4 py-4 font-[600]">Before Casting</th>
                <th className="pl-4 py-4 font-[600]">Casting</th>
                <th className="pl-4 py-4 font-[600]">Before Machining</th>
                <th className="pl-4 py-4 font-[600]">Machining</th>
              </tr>
            </thead>
            <tbody>
              {data.dataMonitoring?.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-[#D0D3D9] text-sm whitespace-nowrap"
                >
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      name="complete"
                      className="border rounded-md border-[#20519F] text-[#20519F] inline-block p-2 cursor-pointer"
                      onClick={data.onMachineModalOpen}
                    >
                      {item.qrTagNumber}
                    </button>
                  </td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">{item.qtyQrTag}</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    <span className="p-2 bg-[#F79009] rounded text-[#FFF]">
                      {item.beforeCastingAt}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="p-2 bg-[#F79009] rounded text-[#FFF]">
                      {item.castingAt}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="p-2 bg-[#20519F] rounded text-[#FFF]">
                      {item.beforeMachiningAt}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="p-2 bg-[#20519F] rounded text-[#FFF]">
                      {item.afterMachiningAt}
                    </span>
                  </td>
                </tr>
              ))}

              {/* <tr className="border-b border-[#D0D3D9] text-sm">
                <td className="px-4 py-2">
                  <button
                    type="button"
                    name="complete"
                    className="border rounded-md border-[#20519F] text-[#20519F] inline-block p-2 cursor-pointer"
                    onClick={data.onCastingModalOpen}
                  >
                    NM1301160320219991
                  </button>
                </td>
                <td className="px-4 py-2">CASE K1AA (FG)</td>
                <td className="px-4 py-2">100</td>
                <td className="px-4 py-2">PCS</td>
                <td className="px-4 py-2">NM2102012000</td>
                <td className="px-4 py-2">
                  <span className="p-2 bg-[#F79009] rounded text-[#FFF]">
                    16/08/2013
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="w-full flex items-center justify-center">
                    -
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="w-full flex items-center justify-center">
                    -
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="w-full flex items-center justify-center">
                    -
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="flex items-end justify-end mt-6">
          <Pagination row={1} limit={1} page={1} />
        </div>
        <CastingModalView
          open={data.modalCasting}
          close={data.onCastingModalClose}
        />
        <MachiningModalDetail
          open={data.modalMachine}
          close={data.onMachineModalClose}
        />
      </div>
    </div>
  );
}
