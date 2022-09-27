import styled from "styled-components";

export const StyledHomeButton = styled.button`
  font-family: 'Mark Pro';
  font-weight: 400;

  background: transparent;

  width: 6.82vw;
  height: 100%;
  border: none;

  color: #FFFFFF;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    color: #C13216;
    background: #FFFFFF;
  }
  @media screen and (max-width: 1025px) {
    width: 10vw;
  }
  @media screen and (max-width: 769px) {
    width: 12.5vw;
  }
  @media screen and (max-width: 426px) {
    width: 22.5vw;
  }
  @media screen and (max-width: 321px) {
    width: 25vw;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.5rem;
    width: 50vw;
  }
`