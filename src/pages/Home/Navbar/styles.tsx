import styled from "styled-components"
import { BACKGROUNDS } from "../../../components/UI/variables"

export const NavbarContainer = styled.div`
  width: 95.78%;
  height: 15.64%;

  @media screen and (max-width: 1800px) {
    height: 169px;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 100%;
    height: 5%;
    background: ${BACKGROUNDS.loginBackground};
  }
  @media screen and (max-width: 321px) {
    height: 7%;
  }
`

export const HomeNavbar = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  
  @media screen and (max-width: 769px), (max-height: 426px) {
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 426px) {
    margin-top: 0%;
  }
`

export const LogoImage = styled.img`
  width: 7.81%;
  height: 30%;

  margin-top: 1.45%;

  @media screen and (max-width: 1025px) {
    width: 13%;
  }
  @media screen and (max-width: 769px),(max-height: 426px) {
    display: none;
  }
`

export const LogoImageLight = styled.img`
  display: none;

  margin-top: 1.45%;

  @media screen and (max-width: 769px), (max-height: 426px) {
    display: block;
    width: 35%;
    height: 60%;
    margin-top: 0%;
  }
  @media screen and (max-width: 426px) {
    margin-left: 2%;
  }
`