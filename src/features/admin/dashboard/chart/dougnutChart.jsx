import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: [
      "Rantai Conveyor",
      "Shaft & Bearing",
      "Data 3",
      "Data 4",
      "Data 5",
      "Data 6",
      "Data 7",
      "Data 8",
      "Data 9",
      "Data 10",
    ],
    datasets: [
      {
        data: [30, 20, 10, 5, 15, 8, 12, 18, 7, 25],
        backgroundColor: [
          "rgba(73, 202, 221, 1)", // Rantai Conveyor
          "#F36960", // Shaft & Bearing
          "#FFCE56",
          "#36A2EB",
          "#FF6384",
          "#4BC0C0",
          "#FF9F40",
          "#E7E9ED",
          "#9966FF",
          "#C9CBCF",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Menghilangkan simbol warna di atas chart
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

