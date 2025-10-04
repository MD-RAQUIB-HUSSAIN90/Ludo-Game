import styled from "styled-components";


function RoleDice({setDice,dice}) {


  const genRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice=()=>{

const randomNum=genRanNum(1,6);
setDice(randomNum);
  }

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${dice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to role</p>
    </DiceContainer>
  );
}

export default RoleDice;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
