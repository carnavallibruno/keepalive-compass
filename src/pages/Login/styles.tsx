import styled from "styled-components";
import laptop from '../../assets/laptop.png'; // ? Calls for error but for some reason the project still imports the image and uses it

import {BACKGROUNDS, COLORS, FONTS} from '../../components/UI/variables'

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  margin: 0 auto;
  @media screen and (max-width: 897px), (max-height: 426px) {
    min-height: 768px;
    background-image: url(${laptop});
    background-position: center;
  }
  @media screen and (max-width: 668px) {
    min-height: 900px;
  }
  @media screen and (max-width: 426px) {
    min-height: 800px;
  }
  @media screen and (max-width: 376px) {
    min-height: 750px;
  }
`

export const FormSection = styled.section`
  color: ${COLORS.loginTitleText};
  background: ${BACKGROUNDS.loginBackground};
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 897px) {
    width: 100%;
    background: none;
    backdrop-filter: blur(4px);
    justify-content: flex-start;
  }
`

export const FormContainer = styled.form`
  height: 63.61%;
  width: 43.43%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (max-width: 1441px) {
    width: 43.43%;
    height: 70%;
    width: 50%;
  }
  @media screen and (max-width: 1369px) {
    height: 75.5%;
  }
  @media screen and (max-width: 1025px) {
    width: 65%;
  }
  @media screen and (max-width: 897px) {
    height: 62.5%;
  }
  @media screen and (max-width: 769px) {
    height: 65%;
  }
  @media screen and (max-width: 668px) {
    width: 86%;
    height: 65%;
  }
  @media screen and (max-width: 481px) {
    height: 80%;
  }
  @media screen and (max-width: 426px) {
    width: 86%;
    height: 70%;
  }
  @media screen and (max-width: 376px) {
    height: 70%;
  }
  @media screen and (max-width: 321px) {
    height: 65%;

  }
  @media screen and (max-width: 281px) {
    height: 70%;
    min-height: 550px;
  }
`

export const ImageContainer = styled.div`
  width: 40%;
  text-align: center;
  display: none;
  @media screen and (max-width: 897px) {
    display: block;

    margin-top: 5%;
    margin-bottom: 7.5%;
  }
  @media screen and (max-width: 654px) {
    margin-top: 0%;
    margin-bottom: 7.5%;
  }
  @media screen and (max-width: 426px) {
    width: 55%;
    margin-bottom: 20%;
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 15%;
  }
  @media screen and (max-width: 321px) {
    margin-top: 0%;
  }
`

export const CompassImageMobile = styled.img`
  width: 100%;
  margin-top: 2.188rem;
`

export const LoginAndContinueButton = styled.div`
  width: 100%;
  height: 58.8%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 897px) {
    height: 70%;
  }
  @media screen and (max-width: 769px) {
    height: 65%;
  }
  @media screen and (max-width: 668px) {
    height: 70%;
  }
  @media screen and (max-width: 481px) {
    height: 70%;
  }
  @media screen and (max-width: 426px) {
    height: 65%;
  }
  @media screen and (max-width: 391px) {
    height: 68%;
  }
  @media screen and (max-width: 376px) {
    height: 60%;
  }
  @media screen and (max-width: 321px) {
    height: 65%;
  }
`

export const LoginContainer = styled.div`
  height: 55.19%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (max-width: 769px) {
    height: 50%;
  }
  @media screen and (max-width: 668px) {
    height: 50%;
  }
  @media screen and (max-width: 481px) {
    height: 45%;
  }
  @media screen and (max-width: 426px) {
    height: 47.5%;
  }
  @media screen and (max-width: 376px) {
    height: 55%;
  }
  @media screen and (max-width: 321px) {
    height: 55%;
  }
`

export const Label = styled.label`
  height: 17.04%;
  font-size: 1.875rem;
  @media screen and (max-width: 376px) {
    font-size: 1.5rem;
  }
`

export const ImageSection = styled.section`
  text-align: center;
  width: 50%;
  background-image: url(${laptop});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 897px) {
    display: none;
  }
`

export const CompassImage = styled.img`
  width: 31.86%;
  margin-top: 2.188rem;
`