import styled from "styled-components";
import laptopImg from '../../assets/laptop.svg';

export const Container = styled.div`
  display: flex;

  height: 100vh;

  font-family: 'Mark Pro';
  font-weight: 400;
`

export const FormSection = styled.section`
  color: #E0E0E0;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  width: 50%;
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
  margin-bottom: 8.438rem;
  border: 1px solid red;
`

export const Label = styled.label`
  font-size: 1.875rem;
`

export const ImageSection = styled.section`
  text-align: center;
  width: 50%;
  background-image: url(${laptopImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const CompassImage = styled.img`
  margin-top: 2.188rem;
`