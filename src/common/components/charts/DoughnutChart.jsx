import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export default function DoughnutChart({ datas, labels, height }) {
  const data = {
    labels: ["Rantai Conveyor", "Shaft & Bearing"],
    datasets: [
      {
        data: [30, 10],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} height={height} />
    </>
  );
}
