import styled from "styled-components";

interface IconProps {
  focused: boolean;
}

interface InputProps {
  visible: boolean;
  isPassword: boolean;
}

export const StyledInput = styled.input<InputProps>`
  font-family: 'Mark Pro';
  font-weight: 400;
  background: transparent;

  width: 19.73vw;
  height: 3.75rem;

  font-size: 1rem;

  padding-left: 5.27%;
  padding-right: 11%;
  
  color: #FFFFFF;

  outline: none;
  border: 1px solid #FFFFFF;
  border-radius: 50px;

  ::placeholder {
    font-size: 1rem;
    color: #E0E0E0;
    @media screen and (max-width: 1025px) {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 50vw;
  }

  @media screen and (max-width: 426px) {
    width: 65vw;
    font-size: 1.25rem;
    padding-right: 15%;
  }
  
  @media screen and (max-width: 321px) {
    padding-right: 17.5%;
  }

  @media screen and (max-width: 281px) {
    padding-right: 20%;
  }

  ${(props) => 
    props.visible ? "border: 1px solid #E9B425;" : "border: 1px solid #FFFFFF"
  }

  /* ${(props) =>
    props.isPassword ? "font-size: 2rem" : "font-size: 1rem"
  } */
`

export const InputAll = styled.div`
  margin-top: 2rem;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div<IconProps>`
  transition: 0.5s transform;

  ${(props) =>
    props.focused ? "transform: translate(-180%)" : "transform: translate( 1.04vw, 0)"}
`