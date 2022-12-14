import styled from "styled-components";
import { FONTS } from "../../../components/UI/variables";

export const HeaderLoginStyle = styled.div`
  width: 72.18%;
  height: 18%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 1369px) {
    height: 22.5%;
  }
  @media screen and (max-width: 897px) {
    width: 100%;
    height: 27%;
  }
  @media screen and (max-width: 769px) {
    width: 72.18%;
    height: 20%;
  }
  @media screen and (max-width: 668px) {
    width: 100%;
  }
  @media screen and (max-width: 426px) {
    height: 22.5%;
  }
  @media screen and (max-width: 376px) {
    height: 20%;
  }

  
  @media screen and (max-height: 321px) {
    height: 125px;
  }
  @media screen and (max-height: 281px) {
    margin-bottom: 10%;
  }
`

export const Title = styled.h1`
  width: 100%;
  height: 52.41%;

  font-weight: ${FONTS.fontWeightRegular};
  font-size: 3.75rem;

  @media screen and (max-width: 376px) {
    font-size: 2.75rem;
  }

  @media screen and (max-height: 281px) {
    height: 75px;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  
  width: 18.813rem;
  height: 35.86%;

  line-height: 20px;
  @media screen and (max-width: 897px) {
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
  }
`