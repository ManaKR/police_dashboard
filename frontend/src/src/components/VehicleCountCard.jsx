export default function VehicleCountCard({ data }) {
  return (
    <div style={{ width:"300px",padding:"20px",marginTop:"20px",background:"#f0f0f0",borderRadius:"10px" }}>
      <h2>Vehicles on Route</h2>
      <p>Total: {data.total}</p>
      <p>2-Wheelers: {data.twoWheelers}</p>
      <p>4-Wheelers: {data.fourWheelers}</p>
      <p>Heavy Vehicles: {data.heavyVehicles}</p>
    </div>
  );
}
