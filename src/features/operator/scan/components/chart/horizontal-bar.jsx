import React from "react";
import { Bar } from "react-chartjs-2";
const HorizontalBarChart = ({ data }) => {
  const options = {
    scale: {
      x: {
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "black",
        align: "center",
        anchor: "center",
        clamp: true,
        font: {
          weight: "bold",
        },
        formatter: (value, context) => {
          const datasetIndex = context.datasetIndex;
          const dataIndex = context.dataIndex;
          const dataset = context.chart.data.datasets[datasetIndex];
          const label = dataset.labels[dataIndex];
          return label;
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    interations: {
      includeInvisible: false,
    },
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
