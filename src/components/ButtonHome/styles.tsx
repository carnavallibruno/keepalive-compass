import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
}

export const StyledHomeButton = styled.button<ButtonProps>`
  font-family: 'Mark Pro';
  font-weight: 400;

  background: transparent;

  width: 100%;
  height: 100%;
  border: none;

  cursor: pointer;
  color: #FFFFFF;

  ${(props) => 
    props.children == 'Continuar Navegando' ? "color: #C13216; background: #FFFFFF;" : ''
  }
  
  @media screen and (max-width: 769px), (max-height: 426px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 721px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 1rem;
  }



  @media screen and (max-height: 426px) {
    font-size: 1.1rem;
  }
`