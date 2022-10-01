import styled from "styled-components";

interface IconProps {
  focused: boolean;
}

interface InputProps {
  visible: boolean;
}

export const InputAll = styled.div`
  /* margin-top: 2rem; */
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
  font-family: 'Mark Pro';
  font-weight: 400;
  background: transparent;

  width: 100%;
  height: 100%;

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
  }

  ${(props) => 
    props.visible ? "border: 1px solid #E9B425;" : "border: 1px solid #FFFFFF"
  }
`



export const IconContainer = styled.div<IconProps>`
  transition: 0.5s transform;

  ${(props) =>
    props.focused ? "transform: translate(-180%)" : "transform: translate( 1.04vw, 0)"}
`