import styled from "styled-components";
import laptopImg from '../../assets/laptop.svg';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100%;

  font-family: 'Mark Pro';
  font-weight: 400;
`

export const FormSection = styled.section`
  color: #E0E0E0;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  
  width: 50vw;
  height: 100vh;


  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = styled.form`
  margin-top: 18.24vh;
`

export const Titulo = styled.h1`
  font-size: 3.75rem;
  font-weight: 400;

  margin-bottom: 1.063rem;
`

export const Description = styled.p`
  font-size: 1rem;

  width: 301px;
  height: 52px;

  line-height: 20px;

  margin-bottom: 12.5vh;
`

export const Label = styled.label`
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