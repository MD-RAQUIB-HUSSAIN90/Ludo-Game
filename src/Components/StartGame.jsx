import { Button } from "../styles/Button";


const StartGame = ({toggle}) => {
  return (
    <div className="container">
      <div>
        <img src="/images/dices.png" alt="" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </div>
  );
};

export default StartGame;
