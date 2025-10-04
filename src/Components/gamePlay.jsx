import { useState } from "react";
import TotalScore from "./totalScore";
import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import RoleDice from "./RoleDice.jsx";
import { Button } from "../styles/Button";
import Rules from "./rule";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);

  const genRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You must select a number first");
      return;
    }

    const randomNum = genRanNum(1, 6);
    setDice(randomNum);
    if (selectedNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber();
  };


const reset=() => {
setScore(0);
}

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelect
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice dice={dice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={reset}>Reset</Button>
        <Button onClick={() => setRulesVisible((prev) => !prev)}>
          {rulesVisible ? "Hide" : "Show"} rules
        </Button>
      </div>
      {rulesVisible && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.div`
  padding: 30px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
