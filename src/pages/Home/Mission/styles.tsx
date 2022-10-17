import styled from "styled-components"
import { FONTS, COLORS } from "../../../components/UI/variables"

export const MissionContainer = styled.div`
  margin-right: 6.97%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  text-align: right;
  z-index: 1;

  @media screen and (max-width: 1800px) {
    height: 383px;
  }
  
  @media screen and (max-width: 1441px) {
    height: 60%;
  }
  @media screen and (max-width: 1225px) {
    margin: 0 3%;
  }
  @media screen and (max-width: 1025px) {
    width: 95%;
    height: 100%;
  }
  @media screen and (max-width: 769px) {
    height: 85%;
  }
  @media screen and (max-width: 426px) {
    justify-content: space-around;
    margin: 0;
    height: 90%;
    width: 100%;
    margin-right: 2%;
  }
  @media screen and (max-width: 321px) {
    height: 100%;
  }

  @media screen and (max-height: 426px) {
    height: 90%;
  }
`

export const MissionRedSmall = styled.p`
  color: ${COLORS.missionRed};
  font-weight: ${FONTS.fontWeightBold};
  font-size: 2.25rem;

  height: 38px;
  line-height: 46px;

  @media screen and (max-width: 694px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 426px) {
    margin-bottom: -7%;
  }
  @media screen and (max-width: 410px) {
    margin-bottom: -10%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 321px) {
    margin-bottom: -12%;
  }
  @media screen and (max-width: 281px) {
    margin-bottom: -15%;
    font-size: 1rem;
  }



  @media screen and (max-height: 426px) {
    height: 7.5%;
    margin-bottom: -4%;
  }
  @media screen and (max-height: 321px) {
    margin-bottom: -11%;
  }
  @media screen and (max-height: 281px) {
    margin-bottom: -2%;
  }
`

export const MissionRed = styled.p`
  color: ${COLORS.missionRed};
  font-weight: ${FONTS.fontWeightBold};
  font-size: 4rem;

  height: 67px;
  line-height: 81px;
  
  margin-top: 1%;
  margin-bottom: 3px;

  @media screen and (max-width: 1007px) {
    font-size: 3rem;
  }
  
  @media screen and (max-width: 757px) {
    font-size: 2.75rem;
  }
  @media screen and (max-width: 694px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 506px) {
    margin-top: 0%;
    margin-bottom: -7%;

    font-size: 1.7rem;
    height: 30px;
    line-height: 30px;
  }
  @media screen and (max-width: 410px) {
    margin-bottom: -10%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 321px) {
    margin-top: -5%;
    margin-bottom: -12%;
  }
  @media screen and (max-width: 281px) {
    margin-bottom: -15%;
    font-size: 1rem;
  }


  @media screen and (max-height: 426px) {
    font-size: 2.5rem;
    margin-bottom: -5%;
  }
  @media screen and (max-height: 321px) {
    margin-bottom: -13%;
    font-size: 1.8rem;
  }
  @media screen and (max-height: 281px) {
    margin-bottom: -4.5%;
    font-size: 2rem;
  }
`

export const MissionNormal = styled.p`
  color: ${COLORS.darkText};
  font-size: 1.5rem;

  height: 30px;
  line-height: 30px;

  @media screen and (max-width: 541px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 1rem;
    line-height: 15px;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    margin-bottom: -2.5%;
  }
  @media screen and (max-width: 281px) {
    width: 99%;
  }


  @media screen and (max-height: 426px) {
    margin-bottom: 1%;
  }
  @media screen and (max-height: 321px) {
    font-size: 1.2rem;
  }
`