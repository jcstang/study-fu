import React from "react";
import Choices from "../Choices";
import "./index.css";

export default function Card(props) {
  return (
    <>
      {/* main card box */}
      <div className="container card-box">
        {/* top row */}
        <div className="row">
          <div className="col">
            <h1 className="float-right">12</h1>
          </div>
        </div>
        {/* 'x' number row */}
        <div className="row">
          <div className="col">
            <h4>X</h4>
          </div>
          <div className="col">
            <h1 className="float-right">2</h1>
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
