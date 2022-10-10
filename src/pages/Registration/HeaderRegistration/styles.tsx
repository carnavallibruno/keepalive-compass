import styled from "styled-components";
import { FONTS } from './../../../components/UI/variables';

export const HeaderRegistrationStyle = styled.div`
  width: 100%;
  height: 12%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.h1`
  width: 100%;
  height: 58%;

  font-weight: ${FONTS.fontWeightRegular};
  font-size: 3.75rem;
`

export const Description = styled.p`
  font-size: 1rem;
  
  width: 100%;
  height: 25%;

  line-height: 20px;
`