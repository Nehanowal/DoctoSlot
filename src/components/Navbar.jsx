import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>DoctoSlot</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/book">Book</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
};

export default Navbar;