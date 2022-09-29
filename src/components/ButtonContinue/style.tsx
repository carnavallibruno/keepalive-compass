import styled from "styled-components";

export const StyledContinueButton = styled.button`
  font-family: 'Mark Pro';
  font-weight: 400;
  
  border: none;

  color: #FFFFFF;

  width: 93.5%;
  height: 4.188rem;

  font-size: 1.125rem;
  font-weight: 700;

  /* margin-top: 10.64vh; */
  
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #C13216 100%, #FF2D04 0%);
    transition: 5s;
  }
`