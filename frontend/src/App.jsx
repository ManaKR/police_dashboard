import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AccessGranted from "./pages/AccessGranted";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AccessGranted />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
