import React, { useState } from "react";
import _ from "lodash";
// import { getNewBatchOfNumbersObject } from "../../utils/helperFunctions";
import "./index.css";
import { getNewBatchOfNumbersObject } from "../../utils/helperFunctions";

// const topNumber = random();
// const bottomNumber = random();
// const multiplyResult = topNumber * bottomNumber;
// // const initState = createChoiceArray(multiplyResult);
// // const initState = freshUniqueArray(6, multiplyResult);
// const initState = createChoicesArray(6, multiplyResult);
// console.log(`Array of choices: ${initState}`);
// console.log(`Answer: ${multiplyResult}`);

// ****
// const gameNumbers = getNewBatchOfNumbersObject();

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
// const gameNumbers = getNewBatchOfNumbersObject();
// const gameNumbers = {};

const initValue = getNewBatchOfNumbersObject();

export default function Card(props) {
  const [gameValues, setGameValues] = useState(initValue);

  // console.log("props thing below");
  // console.log(props.gameNumbers);
  const [userMessage, setUserMessage] = useState("");
  // const [topNumber, setTopNumber] = useState(gameValues.topNumber);
  // const [bottomNumber, setBottomNumber] = useState(
  //   props.gameNumbers.bottomNumber
  // );
  // const [answer, setAnswer] = useState(props.gameNumbers.answer);
  // const [choicesArray, setChoicesArray] = useState(props.gameNumbers.choices);
  // const [topRowArray, setTopRowArray] = useState(props.gameNumbers.rowTop);
  // const [bottomRowArray, setBottomArray] = useState(props.gameNumbers.rowBtm);

  const resetGame = () => {
    console.log("hello!, resetgame has been clicked");
    const newGameValues = getNewBatchOfNumbersObject();
    setGameValues(newGameValues);
    setUserMessage("");

    // setTopNumber(newGameValues.topNumber);
    // setBottomNumber(newGameValues.bottomNumber);
  };

  const onClickHandler = (event) => {
    const chosenValue = event.target.id;
    // console.log(`chosenValue: ${chosenValue}`);
    // console.log(typeof chosenValue);
    // console.log("im clicked!");

    console.log(`chosenValue: ${chosenValue} answer: ${gameValues.answer}`);
    // console.log(typeof gameNumbers.answer);

    if (parseInt(chosenValue) === gameValues.answer) {
      console.log("correct!");
      setUserMessage("Correct!");
      // TODO: what needs to happen when user chooses correct answer
    } else {
      console.log("wrong");
      setUserMessage("Wrong!");
      // TODO: wrong answer, what now? reset game?
    }
  };

  return (
    <>
      {/* main card box */}
      <div className="container card-box">
        <h3>{userMessage}</h3>
        {/* top row */}
        <div className="row">
          <div className="col">
            <h1 className="float-right">{gameValues.topNumber}</h1>
          </div>
        </div>
        {/* 'x' number row */}
        <div className="row">
          <div className="col">
            <h4>X</h4>
          </div>
          <div className="col">
            <h1 className="float-right">{gameValues.bottomNumber}</h1>
          </div>
        </div>

        {/* horizontal line */}
        <div className="last"></div>

        {/* Grid of 6 choices */}
        <div className="container">
          <div className="row">
            {gameValues.rowTop.map((item, index) => (
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
            {gameValues.rowBtm.map((item, index) => (
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
        <button onClick={() => resetGame()}>Reset</button>
      </div>
    </>
  );
}
