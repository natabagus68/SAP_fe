import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export default function MixedChart({height}) {
// export default function MixedChart({ datas, labels, maxValue = 300 }) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    // datasets: datas?.map((item, i) => {
    //   return {
    //     label: setup[i]?.lable,
    //     data: item,
    //     datasetStrokeWidth: 3,
    //     pointDotStrokeWidth: 4,
    //     backgroundColor: setup[i]?.color,
    //     borderColor: setup[i]?.color,
    //     tension: 0.0,
    //     pointRadius: 4,
    //     pointBackgroundColor: "#FFF",
    //     borderWidth: 2.5,
    //   };
    // }),
    datasets: [
      {
        type: "line",
        label: "Jumlah Freq/Hari",
        data: [10, 15, 7, 12, 9, 5],
        datasetStrokeWidth: 3,
        pointDotStrokeWidth: 4,
        borderColor: "rgba(249, 166, 58, 1)",
        tension: 0.0,
        pointRadius: 4,
        pointBackgroundColor: "#FFF",
        borderWidth: 2.5,
      },
      {
        type: "bar",
        label: "Painting",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(73, 202, 221, 1)",
        stack: "troubleStatistic",
        barThickness: 40,
      },
      {
        type: "bar",
        label: "Painting",
        data: [5, 10, 7, 15, 12, 9],
        backgroundColor: "rgba(133, 141, 157, 1)",
        stack: "troubleStatistic",
        barThickness: 40,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      // y: {min: 0, max: Number(maxValue) * 1.2, stepSize: 0}
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} height={height} />
    </>
  );
}
