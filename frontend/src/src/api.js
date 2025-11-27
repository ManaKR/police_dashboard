import axios from "axios";
const API_URL = "http://localhost:5000";
export const fetchVehicleData = async () => {
  try { return (await axios.get(`${API_URL}/api/vehicles`)).data; }
  catch (err) { console.error("Error fetching vehicles:", err); return {}; }
};
