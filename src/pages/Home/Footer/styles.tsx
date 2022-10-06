import styled  from 'styled-components';
import { BACKGROUNDS } from "../../../components/UI/variables"
import { COLORS } from '../../../components/UI/variables';

export const FooterHome = styled.footer`
  color: ${COLORS.whiteText};

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: ${BACKGROUNDS.footerBackground};

  @media screen and (max-width: 1441px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    flex-direction: column;
    height: 30%;
  }
  @media screen and (max-width: 426px) {
    height: 40%;
  }
  @media screen and (max-width: 321px) {
    height: 55%;
    margin-top: 10%;
  }


  @media screen and (max-height: 426px) {
    height: 40%;
  }
  @media screen and (max-height: 321px) {
    height: 70%;
}
`





export const FooterSentence = styled.p`
  width: 541px;
  font-size: 0.75rem;
  line-height: 0.951rem;
  text-align: right;
  margin-right: 1.82%;

  @media screen and (max-width: 1441px) {
    margin-right: 0%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 85%;

    font-size: 1rem;
    line-height: 20px;
    text-align: justify;

    margin-top: 3%;
    margin-right: 0%;
  }
  @media screen and (max-width: 721px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 0.9rem;
    line-height: 27.5px;

    margin-top: 5%;
  }
  @media screen and (max-width: 281px) {
    margin-top: 7.5%;
    line-height: 22.5px;
  }


  @media screen and (max-height: 376px) {
    line-height: 27.5px;
  }
  @media screen and (max-height: 321px) {
    line-height: 37.5px;
  }
  @media screen and (max-height: 281px) {
    /* line-height: 27.5px; */
  }
`




export const VerticalBar = styled.p`
  border: 1px solid ${COLORS.whiteText};
  height: 61%;
  margin-right: 6.4%;

  @media screen and (max-width: 1025px), (max-height: 769px) {
    display: none;
  }
`




export const HomeButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 12.65%;
  height: 100%;

  @media screen and (max-width: 1441px) {
    width: 17.5%;
  }
  @media screen and (max-width: 1025px) {
    width: 30%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    flex-direction: column;
    width: 100%;
    height: 40%;
  }
  @media screen and (max-width: 426px) {
    height: 27.5%;
  }
  @media screen and (max-width: 391px) {
    height: 30%;
  }



  @media screen and (max-height: 426px) {
    height: 35%;
  }
`