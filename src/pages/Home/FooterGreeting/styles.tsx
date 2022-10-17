import styled from "styled-components";

export const FooterGreetingStyle = styled.p`
  font-size: 1.5rem;
  width: 16.5%;
  @media screen and (max-width: 1441px) {
    margin-left: 1%;
  }
  @media screen and (max-width: 1025px) {
    font-size: 1rem;
    width: 27%;
  }
  @media screen and (max-width: 769px) {
    margin-left: 0%;
    line-height: 60px;

    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    height: 10%;
  }
  @media screen and (max-width: 426px) {
    margin-top: 2.5%;
    line-height: 40px;
  }
  @media screen and (max-width: 391px) {
    font-size: 1.25rem;
    margin-top: 1%;
  }
  @media screen and (max-width: 376px) {
    margin-top: 2%;
  }



  @media screen and (max-height: 426px) {
    line-height: 40px;
    font-size: 1.75rem;
    margin-left: 0%;
    margin-top: 1%;
    text-align: center;
    width: 90%;
  }
  @media screen and (max-height: 376px) {
    line-height: 35px;
    font-size: 1.5rem;
  }
  @media screen and (max-height: 321px) {
    line-height: 60px;
  }
`