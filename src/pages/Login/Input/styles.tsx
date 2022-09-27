import styled from "styled-components";

interface IconProps {
  focused: boolean;
}

export const StyledInput = styled.input`
  font-family: 'Mark Pro';
  font-weight: 400;
  background: transparent;

  width: 19.73vw;
  height: 3.75rem;

  font-size: 1rem;

  padding-left: 1.04vw;
  
  color: #FFFFFF;
  
  outline: none;
  border: 1px solid #FFFFFF;
  border-radius: 50px;

  ::placeholder {
    color: #E0E0E0;
  }
  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
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
    props.focused ? "transform: translate(-2.4vw)" : "transform: translate( 1.04vw, 0)"}
`