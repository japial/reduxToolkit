import React from "react";
import "./App.css";
import Counter from "../features/Counter";
import Calculator from "../features/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import Notify from "../features/Notify";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto py-2">
          <Notify />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto py-5">
          <Counter />
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
