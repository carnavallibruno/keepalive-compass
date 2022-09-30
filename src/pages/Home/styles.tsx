import styled from "styled-components";
import ballUol from '../../assets/bola-LogoCompasso.svg'

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  margin: 0 auto;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  background-image: url(${ballUol});
  background-repeat: no-repeat;
  background-size: 42.96%;
  background-position: -21% 93%;
`

export const HomeNavbar = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 95.78%;
  height: 15.64%;
`

export const LogoImage = styled.img`
  width: 7.81%;
  height: 30%;

  margin-top: 1.45%;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 100vw;

  
  height: 77.8%;
  
  /* border: 1px solid red; */
`

export const ImageContainer = styled.div`
  position: relative;
`

export const UolImage = styled.img`
  width: 42.96vw;
  position: absolute;
  bottom: -67%;
  left: -12vw;
  z-index: 0;
`



export const FooterHome = styled.footer`
  color: #FFFFFF;
  
  width: 100%;
  height: 9.25%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  z-index: 1;
`

export const FooterSentence = styled.p`
  width: 28.17%;

  font-size: 0.75rem;
  line-height: 0.951rem;
  text-align: right;
  margin-right: 1.82%;
`

export const VerticalBar = styled.p`
  border: 1px solid #FFFFFF;
  height: 61%;
  margin-right: 6.4%;
`



export const HomeButtonsContainer = styled.div`
  display: flex;
  width: 12.65%;
  height: 100%;
`

// @media screen and (max-width: 1441px) {
  
// }

// @media screen and (max-width: 1025px) {

// }

// @media screen and (max-width: 769px) {
  
// }

// @media screen and (max-width: 426px) {
  
// }

// @media screen and (max-width: 376px) {
  
// }

// @media screen and (max-width: 321px) {
  
// }

// @media screen and (max-width: 281px) {
  
// }