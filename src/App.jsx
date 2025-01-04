import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import { useState } from "react";

/*eslint-disable*/
function App() {
  const [cScore, setCScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
