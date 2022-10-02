import styled from "styled-components";
import ballUol from '../../assets/bola-LogoCompasso.svg';

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

  @media screen and (max-width: 1549px) {
    background-size: 39%;
  }
  @media screen and (max-width: 1441px) {
    background-size: 35%;
  }
  @media screen and (max-width: 1432px) {
    background-size: 35%;
  }
  @media screen and (max-width: 1369px) {
    min-height: 900px;
  }
  @media screen and (max-width: 1333px) {
    background-size: 30%;
  }
  @media screen and (max-width: 1225px) {
    background-size: 25%;
    background-position: -5% 20%;
  }
  @media screen and (max-width: 1025px) {
    background-image: none;
  }
  @media screen and (max-width: 769px) {
    min-height: 900px;
  }
  @media screen and (max-width: 426px) {
    min-height: 896px;
  }
`

export const NavbarContainer = styled.div`
  width: 95.78%;
  height: 15.64%;

  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 100%;
    height: 5%;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);;
  }
  @media screen and  (max-width: 391px) {
    height: 5%;
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
    display: flex;
    align-items: center;
  }
`

export const LogoImage = styled.img`
  width: 7.81%;
  height: 30%;

  margin-top: 1.45%;

  @media screen and (max-width: 769px), (max-height: 426px) {
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  
  width: 100vw;
  height: 77.8%;

  @media screen and (max-width: 1025px) {
    height: 55%;
  }
  @media screen and (max-width: 769px) {
    height: 55%;
  }



  @media screen and (max-height: 426px) {
    height: 75%;
  }
`



// ? FOOTER

export const FooterHome = styled.footer`
  color: #FFFFFF;

  width: 100%;
  height: 9.25%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

  z-index: 1;

  @media screen and (max-width: 1441px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    flex-direction: column;
    height: 30%;
  }
  @media screen and (max-width: 426px) {
    height: 40%;
  }


  @media screen and (max-height: 426px) {
    height: 40%;
  }
  @media screen and (max-height: 321px) {
    height: 50%;
}
`

export const FooterSentence = styled.p`
  width: 541px;
  font-size: 0.75rem;
  line-height: 0.951rem;
  text-align: right;
  margin-right: 1.82%;

  @media screen and (max-width: 1441px) {
    margin-right: 0%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 85%;

    font-size: 1rem;
    line-height: 20px;
    text-align: justify;
    
    margin-top: 3%;
    margin-right: 0%;
  }
  @media screen and (max-width: 721px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 541px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 0.9rem;
    line-height: 27.5px;

    margin-top: 5%;
  }
  @media screen and (max-width: 281px) {
    margin-top: 7.5%;
    line-height: 17.5px;
  }


  @media screen and (max-height: 376px) {
    line-height: 27.5px;
  }
  @media screen and (max-height: 281px) {
    line-height: 27.5px;
  }
`

export const VerticalBar = styled.p`
  border: 1px solid #FFFFFF;
  height: 61%;
  margin-right: 6.4%;

  @media screen and (max-width: 1025px) {
    display: none;
  }
`



export const HomeButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 12.65%;
  height: 100%;

  @media screen and (max-width: 1441px) {
    width: 17.5%;
  }
  @media screen and (max-width: 1025px) {
    width: 30%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    flex-direction: column;
    width: 100%;
    height: 40%;
  }
  @media screen and (max-width: 426px) {
    height: 27.5%;
  }
  @media screen and (max-width: 391px) {
    height: 30%;
  }


  @media screen and (max-height: 426px) {
    height: 35%;
  }
`