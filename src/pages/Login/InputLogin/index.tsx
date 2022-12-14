import styled from "styled-components";
import { COLORS, FONTS } from "../../../components/UI/variables";

interface UserIconProps {
  userInputFocused: boolean;
}

interface PasswordIconProps {
  passwordInputFocused: boolean;
}

interface InputProps {
  visible: boolean;
  // isPassword: boolean;
  value: string;
}

export const InputAll = styled.div`
  height: 60px;
  @media screen and (max-width: 376px) {
    height: 50px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`

export const StyledInput = styled.input<InputProps>`
  font-family: ${FONTS.fontMarkPro};
  font-weight: ${FONTS.fontWeightRegular};
  background: transparent;

  width: 100%;
  height: 100%;

  font-size: 1rem;

  padding-left: 5.27%;
  padding-right: 11%;
  
  color: ${COLORS.whiteText};

  outline: none;
  border: 1px solid ${COLORS.whiteText};
  border-radius: 50px;

  ::placeholder {
    font-size: 1rem;
    color: ${COLORS.loginTitleText};
  }

  ${(props) => 
    props.visible ? "border: 1px solid #E9B425;" : "border: 1px solid #FFFFFF"
  }
`



export const UserIconContainer = styled.div<UserIconProps>`
  transition: 0.5s transform;

  ${(props) =>
    props.userInputFocused ? "transform: translate(-180%)" : "transform: translate( 1.04vw, 0)"
  }

  
`

export const PasswordIconContainer = styled.div<PasswordIconProps>`
  transition: 0.5s transform;

  ${(props) =>
    props.passwordInputFocused ? "transform: translate(-180%)" : "transform: translate( 1.04vw, 0)"
  }
`