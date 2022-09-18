import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container flexCentCol">
      <NavBar />
      <div className="contentContainer flexCent">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
