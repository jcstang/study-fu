import React, { useState } from "react";
import "./index.css";
import { getNewBatchOfNumbersObject } from "../../utils/helperFunctions";

const initValue = getNewBatchOfNumbersObject();

export default function Card(props) {
  const [gameValues, setGameValues] = useState(initValue);
  const [userMessage, setUserMessage] = useState("");

  const resetGame = () => {
    console.log("hello!, resetgame has been clicked");
    const newGameValues = getNewBatchOfNumbersObject();
    setGameValues(newGameValues);
    setUserMessage("");
  };

  const onClickHandler = (event) => {
    const chosenValue = event.target.id;
    console.log(`chosenValue: ${chosenValue} answer: ${gameValues.answer}`);

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
