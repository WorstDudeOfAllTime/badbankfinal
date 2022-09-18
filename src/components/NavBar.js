import "./NavBar.css";
import { Link } from "react-router-dom";
import WB from "./../img/worstBank.png";
const NavBar = () => {
  return (
    <div className="navContainer flexCent">
      <div className="logoSide flexCent">
        <h1>
          <Link className="logo" to="/">
            <img
              src={WB}
              style={{ height: "auto", width: "auto", maxHeight: "30px" }}
            ></img>
          </Link>
        </h1>
      </div>
      <div className="navSide flexCent">
        <nav>
          <ul className="flexCent navList">
            <li>
              <Link className="link" to="/accounts">
                Accounts
              </Link>
            </li>
            <li>
              <Link className="link" to="/allusers">
                All Users
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button>Sign Up.</button>
      </div>
    </div>
  );
};

export default NavBar;
