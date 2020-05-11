import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MicroFrontEndOne from "micro-front-end-one";
import MicroFrontEndTwo from "micro-front-end-two";

function App() {
  return (
    <div className="App">
      This is app container.
      <MicroFrontEndOne />
      <MicroFrontEndTwo />
    </div>
  );
}

export default App;
