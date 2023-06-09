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

export default function MixedChart({ height }) {
  const options = {
    responsive: true,
    plugins: {},
  };

  const data = {};

  return (
    <>
      <Bar data={data} options={options} height={height} />
    </>
  );
}
