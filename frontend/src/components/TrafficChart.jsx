import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function TrafficChart({ data }) {
  return (
    <div style={{ width:"600px", marginTop:"40px" }}>
      <Bar
        data={{
          labels:["2-Wheelers","4-Wheelers","Heavy"],
          datasets:[{
            label:"Vehicle Count",
            data:[data.twoWheelers,data.fourWheelers,data.heavyVehicles]
          }]
        }}
      />
    </div>
  );
}
