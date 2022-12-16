import React from "react";
import "./footer.scss";
import codelogo from "../../assets/images/code-logo.svg";
import logo from "../../assets/images/logo192.png";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="top">
          <div class="ul">
            <h5>Our Company</h5>
            <ul>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Company Vision</a>
              </li>
              <li>
                <a href="#">Our History</a>
              </li>
              <li>
                <a href="#">Investorys</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="imgs">
          <img className="img1" src={logo} alt="" />
          <img className="img2" src={codelogo} alt="" />
        </div>
        <div class="bottom">
          <p>@Copyright 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
