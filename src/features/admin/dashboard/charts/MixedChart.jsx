import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Casting",
      data: [50, 30, 80, 70, 50, 70, 60],
      backgroundColor: "#F79009",
    },
    {
      label: "Machining",
      data: [50, 30, 80, 70, 50, 70, 60],
      backgroundColor: "#1BBDD4",
    },
  ],
};

export default function MixedChart() {
  return <Bar options={options} data={data} />;
}
