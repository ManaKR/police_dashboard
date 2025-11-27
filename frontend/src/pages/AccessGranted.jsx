import { useNavigate } from "react-router-dom";

export default function AccessGranted() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign:"center", marginTop:"100px" }}>
      <h1>Access Granted</h1>
      <p>You are authorized traffic police within the ambulance route.</p>
      <button onClick={() => navigate("/dashboard")} style={{ padding:"12px 24px", fontSize:"18px", cursor:"pointer" }}>
        Enter Dashboard
      </button>
    </div>
  );
}
