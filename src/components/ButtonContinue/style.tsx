import styled from "styled-components";

export const StyledButton = styled.button`
  color: #FFFFFF;

  width: 21vw;
  height: 4.188rem;

  font-size: 1.125rem;
  font-weight: 700;

  margin-top: 10.64vh;
  
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #C13216 100%, #FF2D04 0%);
    transition: 5s;
  }
`