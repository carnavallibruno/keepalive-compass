import styled from "styled-components";
import ballUol from '../../assets/bola-LogoCompasso.svg';

import { BACKGROUNDS } from '../../components/UI/variables'

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background: ${BACKGROUNDS.homeBackground};
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  margin: 0 auto;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  background-image: url(${ballUol});
  background-repeat: no-repeat;
  background-size: 42.96%;
  background-position: -21% 93%;

  @media screen and (max-width: 1549px) {
    background-size: 39%;
  }
  @media screen and (max-width: 1441px) {
    background-size: 35%;
    min-height: 850px;
  }
  @media screen and (max-width: 1369px) {
    min-height: 900px;
  }
  @media screen and (max-width: 1333px) {
    background-size: 30%;
  }
  @media screen and (max-width: 1225px) {
    background-size: 25%;
    background-position: -5% 20%;
  }
  @media screen and (max-width: 1025px) {
    background-image: none;
  }
  @media screen and (max-width: 769px) {
    min-height: 900px;
  }
  @media screen and (max-width: 426px) {
    min-height: 800px;
  }
`