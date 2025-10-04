import React from "react";
import styled from "styled-components";

export default function Rule() {
  return (
    <RuleContainer>
      <h2>Game Rules</h2>
      <div className="text">
        <p>Select a number between 1 and 6.</p>
        <p>Roll the dice by clicking the "Roll" button.</p>
        <p>If the rolled number matches your selection, you gain points.</p>
        <p>If not, you lose points.</p>
        <p>The game resets when you click the "Reset" button.</p>
      </div>
    
    </RuleContainer>
  );
}

const RuleContainer = styled.div`
max-width: 600px;
margin: 0 auto;
border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
 }
    .text{
    margin-top: 10px;
   
    
    }
    p{
        font-size: 14px;
`;
