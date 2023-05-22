import { Breadcrumbs, Toggle } from "@common/components";
import { ChartTopDashboard } from "@common/components/chart-top-dashboard";
import MixedChart from "../chart/MixedChart";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import DoughnutChart from "../chart/dougnutChart";
import LineChart from "../chart/lineChart";

export default function GeneralView() {
  return (
    <>
      <Breadcrumbs items={["Dashboard", "General"]} />
      <div className="mt-5 w-full flex justify-between gap-8">
        <ChartTopDashboard checkList={120} time={2020}>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-[#739EE3]"
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </ChartTopDashboard>

        <ChartTopDashboard checkList={120} time={2020}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-[#FECE00]"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </ChartTopDashboard>

        <ChartTopDashboard checkList={120} time={2020}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-[#DB6037]"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </ChartTopDashboard>
      </div>

      <div className="mt-5 w-full border bordert-gray-300 rounded-xl bg-white py-4 px-3">
        <div className="w-full flex justify-between px-4">
          <h1 className="text-bold text-3xl ">Trouble Statistic</h1>
          <div>
            <select
              name=""
              className="py-2 px-2 border border-gray-300 rounded-md text-center bg-white outline-none"
            >
              <option disabled selected>
                Pilih
              </option>
              <option value="">Daily</option>
              <option value="">Mounthly</option>
              <option value="">Yearly</option>
            </select>
          </div>
        </div>
        <div>
          <MixedChart />
        </div>
      </div>
      <div className="mt-10 w-full flex justify-between  gap-2">
        <div className="w-full border border-gray-300 rounded-xl py-4 px-1 bg-white">
          <div className="w-full flex justify-between">
            <h1 className="font-bold text-xl">Checklist Problem</h1>
            <div>
              <Datepicker
                value={null}
                onChange={null}
                inputClassName={
                  "border border-gray-300 rounded-xl outline-none w-92 text-sm py-2 px-4 w-96 placeholder:pl-3"
                }
                containerClassName={""}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-9">
              <DoughnutChart />
            </div>
            <div className="w-full items-center flex  h-96 px-20 gap-8 ">
              <div className="flex flex-col gap-7">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#49CADD]"></div>
                  <p className="font-semibold text-neutral-500">
                    Rantai Conveyor
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#F36960]"></div>
                  <p className="font-semibold text-neutral-500">
                    Shaft & Bearing
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#4D74B2]"></div>
                  <p className="font-semibold text-neutral-500">
                    Flowmeter Methanol
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#858D9D]"></div>
                  <p className="font-semibold text-neutral-500">
                    Hot Water Safety Valve
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#F16BC9]"></div>
                  <p className="font-semibold text-neutral-500">Crankshaft</p>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#F9A63A]"></div>
                  <p className="font-semibold text-neutral-500">
                    Mess Belt Conveyor
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#FAF15F]"></div>
                  <p className="font-semibold text-neutral-500">
                    Gear Box & Motor
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#41C487]"></div>
                  <p className="font-semibold text-neutral-500">
                    Mixed Fan & Motor
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#A765AD]"></div>
                  <p className="font-semibold text-neutral-500">
                    Preasure Gauge
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-[#B192F1]"></div>
                  <p className="font-semibold text-neutral-500">Turbocharger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] border border-gray-300 rounded-xl py-4 px-4 bg-white">
          <div className="w-full flex justify-between">
            <h1 className="font-bold text-xl">Sparepart Cost</h1>
            <div className="flex items-center gap-4">
              <select
                name=""
                id=""
                className="py-2 px-4 border border-gray-300 rounded-xl outline-none bg-white"
              >
                <option selected disabled>
                  Alloy Casting
                </option>
              </select>
              <select
                name=""
                id=""
                className="py-2 px-4 border border-gray-300 rounded-xl outline-none bg-white"
              >
                <option selected disabled>
                  Monthly
                </option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}

