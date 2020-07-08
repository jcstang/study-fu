import React, { useState } from "react";
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
const gameNumbers = getNewBatchOfNumbersObject();

// const onClickHandler = (event) => {
//   const chosenValue = event.target.id;
//   // console.log(`chosenValue: ${chosenValue}`);
//   // console.log(typeof chosenValue);
//   // console.log("im clicked!");

//   console.log(`chosenValue: ${chosenValue} answer: ${gameNumbers.answer}`);
//   // console.log(typeof gameNumbers.answer);

//   if (parseInt(chosenValue) === gameNumbers.answer) {
//     console.log("correct!");
//     setUserMessage();
//     // TODO: what needs to happen when user chooses correct answer
//   } else {
//     console.log("wrong");
//     // TODO: wrong answer, what now? reset game?
//   }
// };

export default function Card(props) {
  const [userMessage, setUserMessage] = useState("");

  const onClickHandler = (event) => {
    const chosenValue = event.target.id;
    // console.log(`chosenValue: ${chosenValue}`);
    // console.log(typeof chosenValue);
    // console.log("im clicked!");

    console.log(`chosenValue: ${chosenValue} answer: ${gameNumbers.answer}`);
    // console.log(typeof gameNumbers.answer);

    if (parseInt(chosenValue) === gameNumbers.answer) {
      console.log("correct!");
      setUserMessage("Correct!");
      // TODO: what needs to happen when user chooses correct answer
    } else {
      console.log("wrong");
      setUserMessage("Wrong!");
      // TODO: wrong answer, what now? reset game?
    }
  };
  // let gameNumbers = {};
  // const gameNumbers = getNewBatchOfNumbersObject();
  // console.log(gameNumbers);

  // const [gameValues, setGameValues] = useState(gameNumbers);
  // const [choiceArray, setChoiceArray] = useState([]);
  // console.log(choiceArray);
  // let choices = gameNumbers.choices;
  // const topRowChoices = choices.slice(0, 3);
  // const bottomRowChoices = choices.slice(3, 6);
  // console.log(topRowChoices);
  // console.log(bottomRowChoices);

  // console.log(gameNumbers.rowTop);
  // console.log(gameNumbers.rowBtm);
  // console.log("------");

  return (
    <>
      {/* main card box */}
      <div className="container card-box">
        <h3>{userMessage}</h3>
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
            {gameNumbers.rowTop.map((item, index) => (
              <div
                className="col hvr-bob"
                key={index}
                onClick={onClickHandler}
                id={item}
              >
                <h5 id={item}>{item}</h5>
              </div>
            ))}
          </div>
          <div className="row">
            {gameNumbers.rowBtm.map((item, index) => (
              <div
                className="col hvr-bob"
                key={index}
                onClick={onClickHandler}
                id={item}
              >
                <h5 id={item}>{item}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
