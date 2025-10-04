import { useState } from "react";
import TotalScore from "./totalScore";
import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import RoleDice from "./RoleDice.jsx";

function GamePlay() {

  const [score, setScore] = useState(0);
   const [selectedNumber, setSelectedNumber] = useState();
     const [dice, setDice] = useState(1);


  const genRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice=()=>{

const randomNum=genRanNum(1,6);
setDice(randomNum);
  }






      
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelect 
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice setDice={setDice} roleDice={roleDice} />
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
`;
