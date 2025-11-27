const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let routeTrafficData = {
  total: 0,
  twoWheelers: 0,
  fourWheelers: 0,
  heavyVehicles: 0,
  lastUpdated: null,
  raw: []
};

function classifyVehicle(size) {
  if (size === 1) return "twoWheelers";
  if (size === 2) return "fourWheelers";
  return "heavyVehicles";
}

app.post("/api/esp32/data", (req, res) => {
  const { deviceId, vehicles } = req.body;
  if (!deviceId || !vehicles) return res.status(400).json({ message:"Invalid ESP32 data format" });

  routeTrafficData = {
    total: vehicles.length,
    twoWheelers: 0,
    fourWheelers: 0,
    heavyVehicles: 0,
    lastUpdated: new Date(),
    raw: vehicles
  };

  vehicles.forEach(v => {
    const cat = classifyVehicle(v.size);
    routeTrafficData[cat]++;
  });

  res.json({ message:"Data received", summary: routeTrafficData });
});

app.get("/api/vehicles", (req, res) => {
  res.json(routeTrafficData);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
