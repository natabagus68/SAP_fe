import { Breadcrumbs } from "@common/components";
import HorizontalBarChart from "../components/chart/horizontal-bar";
import { useDashboardOperator } from "./dashboard-model";
import { Pagination } from "../components/pagiigination";

export const DashboardOperator = () => {
  const model = useDashboardOperator();
  return (
    <>
      <div>
        <Breadcrumbs items={["Dashboard"]} />
      </div>
      <div className="w-full mt-8">
        <table className="w-full">
          <thead>
            <tr className="border-y-2 border-gray-300">
              <th className="text-start text-2xl text-gray-500 font-semibold py-2 px-3">
                No
              </th>
              <th className="text-start text-2xl text-gray-500 font-semibold py-2 px-3">
                Part Name
              </th>
              <th className="text-start text-2xl text-gray-500 font-semibold py-2 px-3">
                Stock Condition (pcs)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y border-gray-300">
              <td className="text-start text-2xl text-gray-500  py-2 px-3">
                1
              </td>
              <td className="text-start text-2xl text-gray-500  py-2 px-3">
                Cover L K1AA
              </td>
              <td className="text-start text-2xl text-gray-500  py-2 px-3">
                <HorizontalBarChart
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        label: "Data 1",
                        data: [5],
                        backgroundColor: "rgba(240, 68, 56, 1)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                      },
                      {
                        label: "Data 2",
                        data: [10],
                        backgroundColor: "rgba(247, 144, 9, 1)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                      },
                      {
                        label: "Data 3",
                        data: [10],
                        backgroundColor: "rgba(18, 181, 105, 1)",
                        borderColor: "rgba(18, 181, 105, 1)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </td>
            </tr>
            <tr className="border-y border-gray-300">
              <td className="text-start text-2xl text-gray-500  py-2 px-3">
                2
              </td>
              <td className="text-start text-2xl text-gray-500  py-2 px-3">
                Cover L K1AA
              </td>
              <td className="text-start text-2xl text-gray-500  py-2 px-3">
                <HorizontalBarChart
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        label: "Data 1",
                        data: [10],
                        backgroundColor: "rgba(240, 68, 56, 1)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                      },
                      {
                        label: "Data 2",
                        data: [20],
                        backgroundColor: "rgba(247, 144, 9, 1)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                      },
                      {
                        label: "Data 3",
                        data: [10],
                        backgroundColor: "rgba(18, 181, 105, 1)",
                        borderColor: "rgba(18, 181, 105, 1)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-32 px-12">
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <div className="w-12   h-12 bg-red-500"></div>
              <h1 className="font-semibold text-3xl">= 110</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-12   h-12 bg-orange-500"></div>
              <h1 className="font-semibold text-3xl">= After Casting</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-12   h-12 bg-green-500"></div>
              <h1 className="font-semibold text-3xl">= Before Machining</h1>
            </div>
          </div>
          <div>
            <Pagination row={4} limit={2} />
          </div>
        </div>

        <div className="w-full mt-9">
          <button className="text-4xl text-white font-bold py-5 w-full bg-blue-700 rounded-md">
            Scan Parts
          </button>
        </div>
      </div>
    </>
  );
};

