import styled from "styled-components";
import laptop from '../../assets/laptop.png'; // ? Calls for error but for some reason the project still imports the image and uses it

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  margin: 0 auto;
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
`

export const FormContainer = styled.form`
  height: 63.61%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  height: 21.1%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.h1`
  height: 52.41%;

  font-size: 3.75rem;
  font-weight: 400;

  /* margin-bottom: 1.063rem; */
`

export const Description = styled.p`
  font-size: 1rem;
  width: 18.813rem;
  height: 35.86%;

  line-height: 20px;
  /* margin-bottom: 12.5vh; */
`

export const Form = styled.div`
  height: 58.8%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LoginContainer = styled.div`
  height: 55.19%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`

export const CompassImage = styled.img`
  width: 31.86%;
  margin-top: 2.188rem;
`