import { ChartLine } from "@common/components/charts/ChartLine";
import FullscreenIcon from "@common/components/icons-new/FullscreenIcon";
import MinimizeIcon from "@common/components/icons-new/MinimizeIcon";
import speedo from "../../../../assets/speedo.png";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import { Breadcrumbs, Toggle } from "@common/components";
import ChartSemiCircle from "@common/components/charts/ChartSemiCircle";

export default function GeneralView() {
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Dashboard", "General"]} />
      <div className="w-full h-[266px] flex gap-[28px]">
        THE DASHBOARD IS IN PROGRESS
        {/* <div className="flex flex-col w-full flex-1 p-6 bg-white shadow-md rounded-xl overflow-hidden gap-4">
          <div className="flex flex-col">
            <span className="text-[#5C5C5C] text-[24px] font-semibold">
              Overall Statistic
            </span>
            <span className="text-[#5C5C5C] font-medium">
              Real Time Current Condition
            </span>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex flex-col gap-3 items-center">
              <div className="relative flex items-end justify-center">
                <ChartSemiCircle value={60} color="#E8A045" />
                <span className="absolute text-[#5C5C5C] text-[35px] leading-[35px] font-medium flex">60</span>
              </div>
              <span className="text-[#8A8A8A] font-medium">kWh</span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative flex items-end justify-center">
                <ChartSemiCircle value={38} color="#32AF3A" />
                <span className="absolute text-[#5C5C5C] text-[35px] leading-[35px] font-medium flex">38</span>
              </div>
              <span className="text-[#8A8A8A] font-medium">kVA</span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative flex items-end justify-center">
                <ChartSemiCircle value={12} color="#FF5A62" />
                <span className="absolute text-[#5C5C5C] text-[35px] leading-[35px] font-medium flex">12</span>
              </div>
              <span className="text-[#8A8A8A] font-medium">kVAr</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full flex-1 bg-white shadow-md rounded-xl overflow-hidden p-6">
          <div className="flex justify-between items-center">
            <span className="text-[#5C5C5C] text-base font-semibold">
              Power Consumption (kWh)
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[#5C5C5C] text-base font-medium">
                Monthly Cost
              </span>
              <select className="h-[30px] bg-white rounded-md px-2 border border-[#8A8A8A]">
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[#5C5C5C] text-base font-medium">
              Rp. 30.000.000
            </span>
            <div className="flex items-center">
              <span className="text-[#FF3030] text-base font-medium">32%</span>
              <ArrowUpIcon color="#FF3030" className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="flex-1 pt-1">
            <ChartLine
              datas={[
                [0, 0, 0],
                [1, 2, 3],
              ]}
              labels={[9, 8, 11]}
              height={"100%"}
            />
          </div>
        </div> */}
      </div>
    </main>
  );
}
