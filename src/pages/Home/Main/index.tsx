import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  
  width: 100vw;
  height: 77.8%;

  @media screen and (max-width: 1025px) {
    height: 55%;
  }
  @media screen and (max-width: 769px) {
    height: 55%;
  }



  @media screen and (max-height: 426px) {
    height: 75%;
  }
`