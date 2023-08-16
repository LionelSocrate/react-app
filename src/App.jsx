import React from "react";
import "./App.css";
import Electro from "./assets/electronic5.jpg";
function App() {
  return (
    <>
      <div className="container">
        <div className="card1">
          <h1>Type of model</h1>
          <div className="sary1">
            <img src={Electro} alt="" />
          </div>
          <div className="btn">
            <button>Buy</button>
          </div>
        </div>
        <div className="card1">
          <h1>Type of model</h1>
          <div className="sary1">
            <img src={Electro} alt="" />
          </div>
          <div className="btn">
            <button>Buy</button>
          </div>
        </div>
        <div className="card1">
          <h1>Type of model</h1>
          <div className="sary1">
            <img src={Electro} alt="" />
          </div>
          <div className="btn">
            <button>Buy</button>
          </div>
        </div>
        <div className="buble">
          <span sty></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default App;
