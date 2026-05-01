import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;