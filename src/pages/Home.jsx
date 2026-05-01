import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to DoctoSlot</h1>

      <p>Book doctor appointments easily without waiting in queues.</p>

      <Link to="/book">
        <button style={styles.button}>Book Appointment</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: 40,
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    background: "#2c5282",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};

export default Home;