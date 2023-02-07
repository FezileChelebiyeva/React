import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="links">
          <nav>
            <p>USEFUL LINKS</p>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="form">
          <form>
            <p>NEWSLETTER</p>
            <input type="text" name="" id="" placeholder="Your Email Addres" />
            <br />
            <button>SUBSCRIBE NOW</button>
          </form>
        </div>
        <div className="contact">
          <p>CONTACT</p>
          <div className="text">
          <p>123, XYZ Rood, BSK 3</p>
          <p>Bangolore, Kamotako, IN</p>
          </div>
          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-behance"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
