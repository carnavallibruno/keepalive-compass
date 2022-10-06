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
  @media screen and (max-width: 1432px) {
    background-size: 35%;
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
    background-size: 32.5%;
    background-position: -10% 22.5%;
  }
  @media screen and (max-width: 769px) {
    background-size: 45%;
    background-position: -35% 3%;
    min-height: 900px;
  }
  @media screen and (max-width: 426px) {
    background-size: 50%;
    background-position: -40% 4%;
    min-height: 800px;
  }
  @media screen and (max-width: 376px) {
    background-size: 47.5%;
    background-position: -32% 5%;
  }
  @media screen and (max-width: 321px) {
    background-size: 60%;
    background-position: -75% 7.5%;
  }
  @media screen and (max-width: 281px) {
    background-size: 85%;
    background-position: -325% 8%;
  }


  @media screen and (max-height: 426px) {
    background-size: 70%;
    background-position: -135% 10%;
  }
  @media screen and (max-height: 376px) {
    background-size: 50%;
    background-position: -50% 7%;
  }
  @media screen and (max-height: 321px) {
    background-size: 55%;
    background-position: -70% 8%;
  }
  @media screen and (max-height: 281px) {
    background-size: 80%;
    background-position: -270% 11%;
  }
`