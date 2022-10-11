import styled from "styled-components";
import laptop from '../../assets/laptop.png'; // ? Calls for error but for some reason the project still imports the image and uses it
import { COLORS, BACKGROUNDS } from './../../components/UI/variables';

export const ContainerRegistration = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  margin: 0 auto;
  @media screen and (max-width: 1025px) {
    min-height: 1200px;
  }
  @media screen and (max-width: 769px) {
    min-height: 1000px;
  }
`

export const RegisterSection = styled.section`
  color: ${COLORS.loginTitleText};
  background: ${BACKGROUNDS.loginBackground};
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1025px) {
    width: 100%;
  }
`

export const FormRegisterContainer = styled.form`
  /* border: 1px solid red; */
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 426px) {
    width: 85%;
  }
`

export const RegisterAndCreateAccountButton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  margin-top: 10%;
`

export const RegisterFields = styled.div`
  /* border: 1px solid red; */
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ImageSectionRegister = styled.section`
  text-align: center;
  width: 50%;
  background-image: url(${laptop});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`

export const ImageContainerRegister = styled.div`
  width: 40%;
  text-align: center;
  display: none;
  @media screen and (max-width: 1025px) {
    display: block;
    width: 20%;
    margin-top: 2%;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 769px) {
    margin-top: 0%;
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

export const LabelRegister = styled.label`
  height: 7%;
  font-size: 1.875rem;
`