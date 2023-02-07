import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">LOGOBAKERY</div>
        <div className="ul">
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <button>Contact</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
