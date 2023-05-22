import React from "react";
import { Bar, Line } from "react-chartjs-2";

const MixedChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: "line",
        label: "Jumlah Freq/Hari",
        data: [10, 15, 7, 12, 9, 5],
        fill: false,
        borderColor: "rgba(249, 166, 58, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
      {
        type: "bar",
        label: "Painting",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(73, 202, 221, 1)",
        stack: "stack1",
        barThickness: 40,
      },
      {
        type: "bar",
        label: "Dies Manufacturing",
        data: [5, 10, 7, 15, 12, 9],
        backgroundColor: "rgba(249, 166, 58, 1)",
        stack: "stack1",
        barThickness: 40,
      },
      {
        type: "bar",
        label: "TPM Profile (Utility)",
        data: [5, 10, 7, 15, 12, 9],
        backgroundColor: "rgba(133, 141, 157, 1)",
        stack: "stack1",
        barThickness: 40,
      },
      {
        type: "bar",
        label: "Expenses",
        data: [5, 10, 7, 15, 12, 9],
        backgroundColor: "rgba(243, 105, 96, 1)",
        stack: "stack1",
        barThickness: 40,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => "Point Style: " + ctx.chart.data.datasets[0].pointStyle,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} height={100} />
    </div>
  );
};

export default MixedChart;

