import React from "react";
import _ from "lodash";
import { getNewBatchOfNumbersObject } from "../../utils/helperFunctions";
import "./index.css";

// const topNumber = random();
// const bottomNumber = random();
// const multiplyResult = topNumber * bottomNumber;
// // const initState = createChoiceArray(multiplyResult);
// // const initState = freshUniqueArray(6, multiplyResult);
// const initState = createChoicesArray(6, multiplyResult);
// console.log(`Array of choices: ${initState}`);
// console.log(`Answer: ${multiplyResult}`);

export default function Card(props) {
  // let gameNumbers = {};
  const gameNumbers = getNewBatchOfNumbersObject();
  console.log(gameNumbers);

  // const [gameValues, setGameValues] = useState(gameNumbers);
  // const [choiceArray, setChoiceArray] = useState([]);
  // console.log(choiceArray);
  // let choices = gameNumbers.choices;
  // const topRowChoices = choices.slice(0, 3);
  // const bottomRowChoices = choices.slice(3, 6);
  // console.log(topRowChoices);
  // console.log(bottomRowChoices);

  console.log(gameNumbers.rowTop);
  console.log(gameNumbers.rowBtm);
  console.log("------");

  return (
    <>
      {/* main card box */}
      <div className="container card-box">
        {/* top row */}
        <div className="row">
          <div className="col">
            <h1 className="float-right">{gameNumbers.topNumber}</h1>
          </div>
        </div>
        {/* 'x' number row */}
        <div className="row">
          <div className="col">
            <h4>X</h4>
          </div>
          <div className="col">
            <h1 className="float-right">{gameNumbers.bottomNumber}</h1>
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
