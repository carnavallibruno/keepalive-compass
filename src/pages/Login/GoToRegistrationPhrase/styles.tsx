import styled from "styled-components";
import { FONTS } from "../../../components/UI/variables";

export const GoToRegistrationPhraseStyle = styled.p`
  text-align: center;
  margin-top: -20%;
  width: 94.5%;
  @media screen and (max-width: 1025px) {
    width: 87.5%;
    line-height: 20px;
    margin-left: 4%
  }
  @media screen and (max-width: 769px) {
    margin-top: 2%;
  }
  @media screen and (max-width: 426px) {
    width: 80%;
    margin-left: 8%;
  }

  
  @media screen and (max-height: 426px) {
    margin-top: 5%;
  }
`

export const GoToRegistrationLink = styled.button`
  color: #C13216;
  text-decoration: none;
  background: none;
  border: none;

  font-family: ${FONTS.fontMarkPro};
  font-size: 1rem;

  padding: 0;
  
  cursor: pointer;
`