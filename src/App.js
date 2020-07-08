import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getNewBatchOfNumbersObject } from "./utils/helperFunctions";

const initValue = getNewBatchOfNumbersObject();

function App() {
  const [gameValues, setGameValues] = useState(initValue);

  const resetGame = () => {
    console.log("hello!, resetgame has been clicked");
    const newGameValues = getNewBatchOfNumbersObject();
    setGameValues(newGameValues);
  };

  return (
    <div className="App">
      <div className="flash-card">
        <h1>Study-Fu</h1>
        <Card />
      </div>
    </div>
  );
}

export default App;
