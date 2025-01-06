import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import { useState } from "react";

/*eslint-disable*/
function App() {
  const [cScore, setCScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function increaseCScore() {
    setCScore(() => cScore + 1);
  }

  function resetCScore() {
    setCScore(0);
  }

  function checkHighScore() {
    cScore > highScore ? setHighScore(cScore) : null;
  }

  return (
    <>
      <Header cScore={cScore} highScore={highScore} />
      <Body
        increaseCScore={increaseCScore}
        resetCScore={resetCScore}
        checkHighScore={checkHighScore}
      />
    </>
  );
}

export default App;
