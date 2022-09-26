import styled from "styled-components";
import laptopImg from '../../assets/laptop.svg';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100%;

  margin: 0 auto;
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
`

export const FormContainer = styled.form`
  height: 63.42vh;
`

export const Titulo = styled.h1`
  height: 7.03vh;

  font-size: 3.75rem;
  font-weight: 400;

  margin-bottom: 1.063rem;
`

export const Description = styled.p`
  font-size: 1rem;

  width: 18.813rem;
  height: 4.81vh;

  line-height: 20px;

  margin-bottom: 12.5vh;
`

export const Label = styled.label`
  height: 3.51vh;
  
  font-size: 1.875rem;
`

export const ImageSection = styled.section`
  text-align: center;
  width: 50vw;
  background-image: url(${laptopImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const CompassImage = styled.img`
  width: 15.93vw;
  margin-top: 2.188rem;
`