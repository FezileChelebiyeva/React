import React from "react";
import logo from "../../assets/images/logo512.png";
import codelogo from "../../assets/images/code-logo.svg";
import "./section.scss";

const Section = () => {
  return (
    <section className="section">
      <div className="container">
        <img src={logo} alt="" />
        <div className="text">
          <h1>React</h1>
          <h3>AF-202</h3>
          <img src={codelogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section;
