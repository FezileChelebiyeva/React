import React from "react";
import "./index.scss";

const Form = () => {
  return (
    <div>
      <div id="form">
        <form>
          <h2>GET IN TOUCH</h2>
          <div className="nameAndEmail">
            <div>
              <p>Tell us your name*</p>
              <input type="text" name="" id="" placeholder="Enter your name" />
            </div>
            <div>
              <p>Enter your email*</p>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="website">
            <p>Your Website</p>
            <input type="text" name="" id="" placeholder="httm://" />
          </div>
          <div className="message">
            <p>Message</p>
            <textarea
              name=""
              id=""
              cols="60"
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="btn">
            <button className="submitBtn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
