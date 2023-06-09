import SearchIcon from "@common/components/icons-new/SearchIcon";
import Datepicker from "react-tailwindcss-datepicker";

export default function MonitoringView() {
  return (
    <div className="border border-[#D0D3D9] rounded-md px-8 py-6">
      <div>
        <h1 className="text-2xl font-[700] text-[#313030]">Monitoring</h1>
        <span className="text-[#667085]">Tracking product data.</span>
      </div>
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
            <div className="flex items-center">
              <span className="text-sm w-[40%] text-[#667085]">
                Date Display
              </span>
              <Datepicker />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#667085]">Sort by</span>
              <select
                name="sorting"
                id="sorting"
                className="px-4 py-2 border border-[#D0D3D9] bg-[#FFF] rounded text-sm"
              >
                <option value="ASC">Ascending</option>
                <option value="DSC">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <table className="overflow-x-scroll">
        <thead className="border-t border-b bg-[#D0D3D9] border-gray-400 text-[#667085]">
          <tr className="font-[600] text-sm text-left">
            <th className="pl-4 py-4">QR Tag Number</th>
            <th className="pl-4 py-4">Item Desc</th>
            <th className="py-4">Quantity</th>
            <th className="pl-4 py-4">Unit</th>
            <th className="pl-2 py-4">Item ID</th>
            <th className="pl-4 py-4">Before Casting</th>
            <th className="pl-4 py-4">Casting</th>
            <th className="pl-4 py-4">Before Machining</th>
            <th className="pl-4 py-4">Machining</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#D0D3D9] text-sm">
            <td className="pl-4 py-2">
              <span className="border rounded-md border-[#20519F] text-[#20519F] inline-block p-2">
                NM13011603202100001
              </span>
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              CASE COMP MISSION K1AA (FG)
            </td>
            <td className="py-2">883</td>
            <td className="pl-4 py-2">PCS</td>
            <td className="py-2">NM2102011000</td>
            <td className="px-4 py-2">16/08/2013</td>
            <td className="px-4 py-2">16/08/2013</td>
            <td className="px-4 py-2">07/05/2016</td>
            <td className="px-4 py-2">07/05/2016</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
