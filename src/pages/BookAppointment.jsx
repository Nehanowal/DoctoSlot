import { useState } from "react";

function BookAppointment() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    if (!name || !time) {
      alert("Fill all fields");
      return;
    }

    alert(`Booked for ${name} at ${time}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Book Appointment</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />

      <h3>Select Time</h3>

      <button onClick={() => setTime("10:00 AM")}>10:00 AM</button>
      <button onClick={() => setTime("10:30 AM")}>10:30 AM</button>
      <button onClick={() => setTime("11:00 AM")}>11:00 AM</button>

      <br /><br />

      <button onClick={handleBook}>Confirm</button>
    </div>
  );
}

export default BookAppointment;