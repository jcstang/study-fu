import React, { useState } from "react";
import { random, createChoicesArray } from "../../utils/helperFunctions";
import "./index.css";

const topNumber = random();
const bottomNumber = random();
const multiplyResult = topNumber * bottomNumber;
// const initState = createChoiceArray(multiplyResult);
// const initState = freshUniqueArray(6, multiplyResult);
const initState = createChoicesArray(6, multiplyResult)
console.log(`Array of choices: ${initState}`);
console.log(`Answer: ${multiplyResult}`);

export default function Card(props) {
  const [choiceArray, setChoiceArray] = useState(initState);
  // console.log(choiceArray);

  return (
    <>
      {/* main card box */}
      <div className="container card-box">
        {/* top row */}
        <div className="row">
          <div className="col">
            <h1 className="float-right">{topNumber}</h1>
          </div>
        </div>
        {/* 'x' number row */}
        <div className="row">
          <div className="col">
            <h4>X</h4>
          </div>
          <div className="col">
            <h1 className="float-right">{bottomNumber}</h1>
          </div>
        </div>

        {/* horizontal line */}
        <div className="last"></div>

        {/* Grid of 6 choices */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>1</h5>
            </div>
            <div className="col">
              <h5>2</h5>
            </div>
            <div className="col">
              <h5>3</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>4</h5>
            </div>
            <div className="col">
              <h5>5</h5>
            </div>
            <div className="col">
              <h5>6</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
