import styled from "styled-components";
import { BACKGROUNDS, COLORS, FONTS } from "../../../components/UI/variables";

export const ButtonCreateAccount = styled.button`
  font-family: ${FONTS.fontMarkPro};
  font-weight: ${FONTS.fontWeightBold};
  font-size: 1.125rem;
  
  border: none;

  color: ${COLORS.whiteText};

  width: 90%;
  height: 4.188rem;  

  /* margin-top: 5%; */
  
  background: ${BACKGROUNDS.continueButtonBackground};
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #C13216 100%, #FF2D04 0%);
  }
  @media screen and (max-width: 1369px) {
    margin-top: 5%;
  }
  @media screen and (max-width: 1025px) {
    width: 100%;
  }
  @media screen and (max-width: 391px) {
    height: 3.25rem;
  }


  @media screen and (max-height: 376px) {
    width: 100%;
  }
`

export default ButtonCreateAccount;