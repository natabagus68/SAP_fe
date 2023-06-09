import SearchIcon from "@common/components/icons-new/SearchIcon";
import Datepicker from "react-tailwindcss-datepicker";
import Pagination from "@common/components/pagination/Pagination";
import useStockModel from "./stock-model";

export default function StockView() {
  const data = useStockModel();
  return (
    <div className="border border-[#D0D3D9] rounded-md px-8 py-6">
      <h1 className="text-2xl font-[700] text-[#313030]">Stock</h1>
      <span className="text-[#667085]">Manage transaction data here.</span>
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
                <option value="ASC">Ascending</option>
                <option value="DSC">Descending</option>
                <option value="LUpdate">Last Update</option>
                <option value="FUpdate">First Update</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-scroll">
        <table>
          <thead className="text-[#667085] bg-[#F0F1F3] border-y-[2px] border-y-[#D0D3D9]">
            <tr className="text-left whitespace-nowrap">
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>No</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>Customer</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>Part Name</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>No Machine</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600] py-2" colSpan={7}>Delivery</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>FG Aop</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>FG Delsi</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" rowSpan={2}>Selisih s/d H+1</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={2}>Assy</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={3}>Painting</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={2}>S/C Paint</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={3}>Machining</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={3}>1017</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={2}>S/C Fns</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={3}>WIP 1012</th>
              <th className="px-4 border border-[#D0D3D9] text-sm font-[600]" colSpan={3}>Casting</th>
            </tr>
            <tr>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">p</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">H</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">H+1</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">H+2</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">H+3</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">H+4</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">H+5</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Process</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Process</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After_S/C</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before_S/C</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After FNS</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Process</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After_S/C</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">Before_S/C</th>
              <th className="p-4 border border-[#D0D3D9] text-sm font-[600]">After FNS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y text-left whitespace-nowrap text-[#514E4E]">
              <td className="p-4">1</td>
              <td className="p-4">AHM</td>
              <td className="p-4">COVER ASSY HEAD KIZG (FG)</td>
              <td className="p-4">0</td>
              <td className="p-4">18</td>
              <td className="p-4">20</td>
              <td className="p-4">25</td>
              <td className="p-4">11</td>
              <td className="p-4">5</td>
              <td className="p-4">9</td>
              <td className="p-4">90</td>
              <td className="p-4">05</td>
              <td className="p-4">5</td>
              <td className="p-4">95</td>
              <td className="p-4">8</td>
              <td className="p-4">0</td>
              <td className="p-4">18</td>
              <td className="p-4">20</td>
              <td className="p-4">25</td>
              <td className="p-4">11</td>
              <td className="p-4">5</td>
              <td className="p-4">9</td>
              <td className="p-4">90</td>
              <td className="p-4">05</td>
              <td className="p-4">5</td>
              <td className="p-4">95</td>
              <td className="p-4">8</td>
              <td className="p-4">0</td>
              <td className="p-4">18</td>
              <td className="p-4">8</td>
              <td className="p-4">0</td>
              <td className="p-4">18</td>
              <td className="p-4">20</td>
              <td className="p-4">20</td>
              <td className="p-4">20</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-end justify-end mt-6">
        <Pagination row={1} limit={1} page={1} />
      </div>
    </div>
  );
}
