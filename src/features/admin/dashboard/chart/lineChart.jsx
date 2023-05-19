import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "Data",
        data: [10, 20, 15, 25, 30, 18],
        borderColor: "#F79009", // Warna garis
        pointBackgroundColor: "white", // Warna titik lingkaran
        pointRadius: 8, // Ukuran titik lingkaran
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

