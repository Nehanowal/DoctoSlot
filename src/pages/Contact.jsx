function Contact() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Contact Clinic</h1>

      <p>Sharma Family Clinic</p>
      <p>Sonipat, Haryana</p>
      <p>+91 9876543210</p>

      <button
        onClick={() =>
          window.open("https://wa.me/919876543210")
        }
      >
        WhatsApp Doctor
      </button>
    </div>
  );
}

export default Contact;