import styled from "styled-components";
import laptop from '../../assets/laptop.png'; // ? Calls for error but for some reason the project still imports the image and uses it

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  margin: 0 auto;
  @media screen and (max-width: 769px) {
    background-image: url(${laptop});
  }
`

export const FormSection = styled.section`
  color: #E0E0E0;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
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
    height: 77.5%;
  }
  @media screen and (max-width: 1025px) {
    width: 65%;
  }
  @media screen and (max-width: 769px) {
    height: 65%;
  }
  @media screen and (max-width: 426px) {
    width: 75%;
    height: 70%;
  }
`

export const ImageContainer = styled.div`
  width: 40%;
  text-align: center;
  display: none;
  @media screen and (max-width: 769px) {
    display: block;

    margin-top: 5%;
    margin-bottom: 15%;
  }
  @media screen and (max-width: 426px) {
    width: 55%;
  }
`

export const CompassImageMobile = styled.img`
  width: 100%;
  margin-top: 2.188rem;
`

export const Header = styled.div`
  width: 72.18%;
  height: 21.1%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 1369px) {
    height: 22.5%;
  }
  @media screen and (max-width: 769px) {
    height: 20%;
  }
  @media screen and (max-width: 426px) {
    height: 22%;
  }
`

export const Title = styled.h1`
  height: 52.41%;

  font-size: 3.75rem;
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 1rem;
  width: 18.813rem;
  height: 35.86%;

  line-height: 20px;
`

export const Form = styled.div`
  width: 100%;

  height: 58.8%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    height: 65%;
  }
  @media screen and (max-width: 426px) {
    height: 65%;
  }
`

export const LoginContainer = styled.div`
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    height: 50%;
  }
  @media screen and (max-width: 426px) {
    height: 55%;
  }
`

export const Label = styled.label`
  height: 17.04%;
  font-size: 1.875rem;
`

export const ImageSection = styled.section`
  text-align: center;
  width: 50%;
  background-image: url(${laptop});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 769px) {
    display: none;
  }
`

export const CompassImage = styled.img`
  width: 31.86%;
  margin-top: 2.188rem;
`