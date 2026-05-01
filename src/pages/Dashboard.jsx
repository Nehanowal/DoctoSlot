import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("appointment");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      {data ? (
        <div>
          <p>Patient: {data.name}</p>
          <p>Time: {data.time}</p>
        </div>
      ) : (
        <p>No Appointments</p>
      )}
    </div>
  );
}

export default Dashboard;