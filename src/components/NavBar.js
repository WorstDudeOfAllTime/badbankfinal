import "./NavBar.css";
import { Link } from "react-router-dom";
import WB from "./../img/worstBank.png";
import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);

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
      <div style={{display: currentUser ? "flex" : "none"}} className="navSide flexCent">
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
      </div>
    </div>
  );
};

export default NavBar;
