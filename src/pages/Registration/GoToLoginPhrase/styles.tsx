import styled from "styled-components";
import { FONTS } from './../../../components/UI/variables';

export const GoToLoginPhraseStyle = styled.p`
  width: 90%;
  text-align: center;
  margin-top: 10%;
  @media screen and (max-width: 1025px) {
    width: 100%;
  }
  @media screen and (max-width: 281px) {
    width: 98%;
    line-height: 25px;
  }
`

export const GoToLoginLink = styled.button`
  color: #C13216;
  text-decoration: none;
  background: none;
  border: none;

  font-family: ${FONTS.fontMarkPro};
  font-size: 1rem;

  padding: 0;
  
  cursor: pointer;
`