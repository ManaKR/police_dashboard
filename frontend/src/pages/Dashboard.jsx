import { useEffect, useState } from "react";
import { fetchVehicleData } from "../api";
import VehicleCountCard from "../components/VehicleCountCard";
import TrafficChart from "../components/TrafficChart";

export default function Dashboard() {
  const [data, setData] = useState({ total:0,twoWheelers:0,fourWheelers:0,heavyVehicles:0 });

  useEffect(() => { (async () => setData(await fetchVehicleData()))(); }, []);

  return (
    <div style={{ padding:"20px" }}>
      <h1>Traffic Police Dashboard</h1>
      <VehicleCountCard data={data} />
      <TrafficChart data={data} />
    </div>
  );
}
