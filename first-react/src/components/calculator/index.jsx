import React from "react";
import { useState } from "react";
import "./index.scss";
const Calculator = () => {
  let [count, setCount] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <input type="text" className="results" value={count} />
        <div className="calc">
          <button
            style={{ color: "red" }}
            onClick={(e) => {
              setCount("");
            }}
          >
            C
          </button>
          <button style={{ color: "blue" }}>()</button>
          <button
            style={{ color: "blue" }}
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            %
          </button>
          <button
            style={{ color: "blue" }}
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            /
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            7
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            8
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            9
          </button>

          <button
            className="multpy"
            style={{ color: "blue" }}
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            x
          </button>

          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            4
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            5
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            6
          </button>
          <button
            style={{ color: "blue" }}
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            -
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            1
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            2
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            3
          </button>
          <button
            className="sum"
            style={{ color: "blue" }}
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            +
          </button>
          <button
            onClick={(e) => {
              setCount(count + "-");
            }}
          >
            +/-
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            0
          </button>
          <button
            onClick={(e) => {
              setCount(count + e.target.innerText);
            }}
          >
            .
          </button>

          <button
            style={{ color: "white", backgroundColor: "rgb(60, 60, 245)" }}
            onClick={(e) => {
              // let sum = 0;
              // count.split("+").forEach((q) => {
              //   sum += +q;
              // });
              // setCount(sum);

              // let multpy = 1;
              // count.split("x").forEach((q) => {
              //   multpy = multpy * Number(q);
              // });
              // setCount(multpy);

              // let arraySubs = count.split("-");
              // console.log(arraySubs);
              // let subtr = 0;
              // arraySubs.forEach((q) => {
              //   subtr = -subtr + -Number(q);
              // });
              // setCount(subtr);
              
              // let arrayDivide = count.split("/");
              // let divide = 1;
              // for (let i = 0; i < arrayDivide.length; i++) {
              //   divide = arrayDivide[0] / arrayDivide[1];
              // }
              // setCount(divide);
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
