import React from "react";
import { useState } from "react";
import "./index.scss";
const Calculator = () => {
  let [str, setStr] = useState("");
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="calculator">
      <div className="calc">{str}</div>
      <div className="coutns">
        <button
          onClick={(e) => {
            setStr(str + e.target.innerText);
          }}
        >
          1
        </button>
        <button
          onClick={(e) => {
            setStr(str + e.target.innerText);
          }}
        >
          2
        </button>
        <button
          onClick={(e) => {
            setStr(str + e.target.innerText);
          }}
        >
          3
        </button>
        <button
          onClick={(e) => {
            setStr(str + e.target.innerText);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            let arrayCount = str.split("+");

            let sum = 0;
            arrayCount.forEach((q) => {
              sum += +q;
            });

            setStr(sum);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
