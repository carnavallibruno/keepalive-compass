import styled from "styled-components";
import laptop from '../../assets/laptop.png'; // ? Calls for error but for some reason the project still imports the image and uses it

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100%;

  margin: 0 auto;
  @media screen and (max-width: 281px) {
    height: 100vh;
  }
`

export const FormSection = styled.section`
  color: #E0E0E0;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1025px) {
    width: 100vw;
  }
`

export const FormContainer = styled.form`
  height: 63.42vh;

  @media screen and (max-width: 1025px) {
    text-align: left;
  }
  @media screen and (max-width: 321px) {
    width: 75vw;
  }
  @media screen and (max-width: 1025px) {
    height: 80vh;
  }
`

export const Titulo = styled.h1`
  height: 7.03vh;

  font-size: 3.75rem;
  font-weight: 400;

  margin-bottom: 1.063rem;
  
  @media screen and (max-width: 1025px) {
    text-align: left;
  }
`

export const Description = styled.p`
  font-size: 1rem;

  width: 18.813rem;
  height: 4.81vh;

  line-height: 20px;

  margin-bottom: 12.5vh;

  @media screen and (max-width: 1025px) {
    text-align: left;
    font-size: 2rem;
    width: 35.813rem;
    line-height: 30px;
  }
  @media screen and (max-width: 426px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 321px) {
    width: 75vw;
  }
  @media screen and (max-width: 281px) {
    height: 15rem;
  }
`

export const Label = styled.label`
  height: 3.51vh;
  font-size: 1.875rem;

  
`

export const ImageSection = styled.section`
  text-align: center;
  width: 50vw;
  background-image: url(${laptop});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1025px) {
    display: none;
  }
`

export const CompassImage = styled.img`
  width: 15.93vw;
  margin-top: 2.188rem;
`

export const CompassImageMediaQuery = styled.img`
  display: none;
  @media screen and (max-width: 1025px) {
    display: block;
    width: 17.5rem;
    margin-bottom: 7.5%;
  }
  @media screen and (max-width: 426px) {
    width: 25rem;
    margin-bottom: 15%;
  }
`