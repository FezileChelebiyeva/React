import React from "react";
import logo from "../../assets/images/logo192.png";
import "./header.scss";
import Button from "../button/button";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" className="react-logo" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
          </ul>
          <Button />
        </nav>
      </div>
    </div>
  );
};

export default Header;
