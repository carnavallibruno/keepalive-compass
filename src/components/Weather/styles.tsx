import styled from "styled-components";
import { COLORS, FONTS } from "../UI/variables";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1.45%;
  
  @media screen and (max-width: 769px), (max-height: 426px) {
    margin-top: 0%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    width: 35%;
    margin-right: 2%;
  }
  @media screen and (max-width: 769px) {
    width: 32.5%;
  }
  @media screen and (max-width: 541px) {
    width: 42.5%;
  }
  @media screen and (max-width: 426px) {
    width: 52.5%;
  }
  @media screen and (max-width: 391px) {
    width: 50%;
  }
  @media screen and (max-width: 376px) {
    width: 52.5%;
  }
  @media screen and (max-width: 321px) {
    flex-direction: column;
    justify-content: center;
  }
  

  @media screen and (max-height: 426px) {
    width: 30%;
  }
  @media screen and (max-height: 391px) {
    width: 31%;
  }
  @media screen and (max-height: 376px) {
    width: 35%;
  }
  @media screen and (max-height: 321px) {
    width: 45%;
  }
  @media screen and (max-height: 281px) {
    width: 37.5%;
  }
`

export const City = styled.p`
  color: ${COLORS.darkText};

  font-size: 0.875rem;
  height: 18px;
  line-height: 18px;

  @media screen and (max-width: 769px), (max-height: 426px) {
    color: ${COLORS.whiteText};
  }
  @media screen and (max-width: 321px) {
    height: 12px;
  }
`

export const WeatherAndTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 50px;
  @media screen and (max-width: 769px) {
    width: 38%;
  }
  @media screen and (max-width: 391px) {
    width: 31%;
  }
  @media screen and (max-width: 376px) {
    width: 32.5%;
  }
  @media screen and (max-width: 321px) {
    height: 30px;
    justify-content: flex-end;
    width: 75%;
  }


  @media screen and (max-height: 426px) {
    justify-content: space-between;
    width: 30%;
  }
  @media screen and (max-height: 376px) {
    width: 32.5%;
  }
`


export const CloudIcon = styled.img`
  @media screen and (max-width: 769px) {
    height: 65%;
  }
  @media screen and (max-width: 541px) {
    height: 55%;
  }
  @media screen and (max-width: 391px) {
    height: 50%;
  }
  @media screen and (max-width: 376px) {
    height: 45%;
  }
  @media screen and (max-width: 321px) {
    height: 70%;
  }


  @media screen and (max-height: 426px) {
    height: 47.5%;
  }
  @media screen and (max-height: 391px) {
    height: 55%;
  }
`




export const Temperature = styled.p`
  color: ${COLORS.darkText};
  height: 100%;

  font-size: 3rem;
  font-weight: ${FONTS.fontWeightBold};
  line-height: 61px;

  @media screen and (max-width: 769px), (max-height: 426px) {
    color: ${COLORS.whiteText};
    font-size: 2.25rem;
    line-height: 54px;
  }
  @media screen and (max-width: 541px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 391px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 321px) {
    line-height: 40px;
  }




  @media screen and (max-height: 426px) {
    line-height: 55px;
  }
  @media screen and (max-height: 391px) {
    font-size: 2rem;
  }
  @media screen and (max-height: 321px) {
    font-size: 1.75rem;
  }
`