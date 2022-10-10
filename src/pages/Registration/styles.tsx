import styled from "styled-components";
import { COLORS, BACKGROUNDS } from './../../components/UI/variables';

export const ContainerRegistration = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  margin: 0 auto;
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
`

export const FormRegisterContainer = styled.form`
  /* border: 1px solid red; */
  width: 50%;
  height: 972px;
  display: flex;
  flex-direction: column;
`

export const RegisterAndCreateAccountButton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

export const RegisterFields = styled.div`
  /* border: 1px solid red; */
  height: 475px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  width: 40%;
  text-align: center;
  display: none;
`

export const CompassImageMobile = styled.img`
  width: 100%;
  margin-top: 2.188rem;
`

export const LabelRegister = styled.label`
  height: 7%;
  font-size: 1.875rem;
`