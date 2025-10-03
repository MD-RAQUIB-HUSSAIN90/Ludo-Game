import { useState } from "react";
import "../styles/numberSelector.css";
function NumberSelect() {
  const array = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div>
      {array.map((num, i) => (
        <div className="Box"
       
          isSelected={num === selectedNumber}
          key={i}
          onClick={() => setSelectedNumber(num)}
          style={{
            backgroundColor: num === selectedNumber ? "black" : "white",
            color: num === selectedNumber ? "white" : "black"
          }}
        >
          {num}
        </div>
      ))}
    </div>
  );
}

export default NumberSelect;
const NumberSelector = () => {
  return <div>NumberSelector</div>;
}



  