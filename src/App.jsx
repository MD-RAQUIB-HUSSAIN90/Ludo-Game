import StartGame from "./Components/startGame";
import { useState } from "react";
import GamePlay from "./Components/gamePlay";
import "./App.css";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGame = () => {
    setIsGameStarted(!isGameStarted);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} />}</>
  );
}

export default App;
