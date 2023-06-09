import { Breadcrumbs } from "@common/components";
import FileIcon from "@common/components/icons-new/FileIcon";
import Datepicker from "react-tailwindcss-datepicker";
import useDashboardModel from "./dashboard-model";
import LineBar from "@common/components/bars/LineBar";
import MixedChart from "@common/components/charts/MixedChart";

export default function DashboardView() {
  const data = useDashboardModel();
  return (
    <div className="text-[#514343]">
      <Breadcrumbs items={["Dashboard"]} />
      <div className="border border-[#D0D3D9] p-4 rounded-md mt-[18px]">
        <div className="flex items-center justify-between mb-[18px]">
          <div className="flex items-center gap-3">
            <h1 className="font-[600]">Dashboard</h1>
            <span className="text-xs cursor-pointer text-[#20519F]">
              See More
            </span>
          </div>
          <select
            name="summary-opts"
            id="summary-opts"
            className="bg-[#FFF] py-2 px-6 border border-[#D0D3D9] rounded-[4px] text-sm"
          >
            <option value="daily" className="text-sm">
              Daily
            </option>
            <option value="weekly" className="text-sm">
              Weekly
            </option>
            <option value="monthly" className="text-sm">
              Monthly
            </option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="flex gap-3 p-6 border border-[#D0D3D9] rounded-md">
            <div className="h-[50px] w-[50px] bg-[#20519F] rounded-full flex items-center justify-center">
              <FileIcon />
            </div>
            <div>
              <h1 className="text-2xl font-[600]">1.200</h1>
              <span className="text-sm">All Transaction</span>
            </div>
          </div>
          <div className="flex gap-3 p-6 border border-[#D0D3D9] rounded-md">
            <div className="h-[50px] w-[50px] bg-[#F79009] rounded-full flex items-center justify-center">
              <FileIcon />
            </div>
            <div>
              <h1 className="text-2xl font-[600]">590</h1>
              <span className="text-sm">Casting</span>
            </div>
          </div>
          <div className="flex gap-3 p-6 border border-[#D0D3D9] rounded-md">
            <div className="h-[50px] w-[50px] bg-[#1BBDD4] rounded-full flex items-center justify-center">
              <FileIcon />
            </div>
            <div>
              <h1 className="text-2xl font-[600]">620</h1>
              <span className="text-sm">Machining</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[25px] mt-6">
        <div className="border border-[#D0D3D9] p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-[600]">Overall Transaction</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm">Date</span>
              <Datepicker
                value={data.date}
                onChange={data.onDate}
                separator={"-"}
                displayFormat="MM DD, YYYY"
                showFooter={true}
                showShortcuts={true}
                placeholder="Select Date Transaction"
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <LineBar BC={25} AC={25} BM={50} />
          </div>
        </div>
        <div className="border border-[#D0D3D9] p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="font-[600]">Performance Statistic</h1>
            <select
              name="summary-opts"
              id="summary-opts"
              className="bg-[#FFF] py-2 px-6 border border-[#D0D3D9] rounded-[4px] text-sm"
            >
              <option value="daily" className="text-sm">
                Daily
              </option>
              <option value="weekly" className="text-sm">
                Weekly
              </option>
              <option value="monthly" className="text-sm">
                Monthly
              </option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-center h-[200px]">
              <MixedChart height={500} />
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-[#F79009]"></div>
                <span className="text-sm">Casting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-[#1BBDD4]"></div>
                <span className="text-sm">Machining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
