import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: black;
  min-width: 220px;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
