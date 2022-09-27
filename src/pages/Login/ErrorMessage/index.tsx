import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: #E9B425;
  
  position: absolute;
  margin-top: 2.59vh;
  margin-left: 2.5vw;

  text-align: center;

  width: 14.73vw;
  height: 3.7vh;

  font-weight: 700;
  line-height: 1.85vh;

  @media screen and (max-width: 1025px) {
    width: 25vw;
  }

  @media screen and (max-width: 769px) {
    width: 33vw;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 426px) {
    width: 65vw;
  }
`