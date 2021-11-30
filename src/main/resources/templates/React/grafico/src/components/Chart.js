import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ datasets }) {
  const [labels, setLabels] = useState([
    "2020-01-29",
    "2020-02-28",
    "2020-03-29",
    "2020-04-28",
    "2020-05-28",
    "2020-06-27",
    "2020-08-26",
    "2020-09-25",
    "2020-10-25",
    "2020-11-24",
    "2020-12-24",
    "2021-01-23",
    "2021-02-22",
    "2021-03-24",
    "2021-04-23",
    "2021-05-23",
    "2021-06-22",
    "2021-08-21",
    "2021-09-20",
    "2021-10-20",
  ]);

  // contém informações a respeito dos dados do grafico
  const data = {
    labels: labels,
    datasets,
  };
  //------------------------------------------------------------------------
  //contém informçaões a respeito das caracteristicas do gráfico
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };
  //------------------------------------------------------------------------
  console.log(data);
  if (!datasets.length) return <></>;
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
