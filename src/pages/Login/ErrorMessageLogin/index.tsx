import styled from "styled-components";
import { COLORS } from "../../../components/UI/variables";

export const ErrorMessageLogin = styled.p`
  color: ${COLORS.errorMessage};
  
  margin-bottom: 1.5%;
  margin-left: 14%;

  text-align: center;

  width: 64.67%;
  height: 9.87%;

  font-weight: 700;
  line-height: 20px;
  @media screen and (max-width: 1441px) {
    width: 80%;
    margin-left: 6.5%;
  }
  @media screen and (max-width: 391px) {
    margin-bottom: 0%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 281px) {
    width: 85%;
  }
`