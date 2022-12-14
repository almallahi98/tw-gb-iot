import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "data",
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "rgb(255, 255, 255)",
      data: [0, 10, 5, 2, 20, 30,40,50,60,70,80,90,100],
    },
    {
        label: "avg",
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(255, 255, 255)",
        data: [50, 50, 50, 50, 50, 50, 50],
      },
  ],
};

function LineChart() {
  return (
    <Line data={data} options={options} height={'310px'}/>
  );
}

export default LineChart;
