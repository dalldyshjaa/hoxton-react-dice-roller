import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Display } from "./Display";
import { Game } from "./Game";

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="container">
      <Display current={current} />
      <Game setCurrent={setCurrent} />
    </div>
  );
}

export default App;
