import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

export const HomeNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 12.95vh;
  @media screen and (max-width: 426px) {
    width: 100vw;
    height: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`

export const LogoImage = styled.img`
  width: 7.8125vw;
  height: 3.9583vh;

  margin-left: 2.08vw;
  margin-top: 2.31vh;
  @media screen and (max-width: 1025px) {
    width: 12.5vw;
  }
  @media screen and (max-width: 769px) {
    width: 13vw;
    margin-top: 5vh;
  }
  @media screen and (max-width: 426px) {
    width: 30vw;
    margin-top: 2.31vh;
    margin-left: 0vw;
    height: 5vh;

  }
`

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  @media screen and (max-width: 426px) {
    margin-top: 5%;
  }
`

export const Time = styled.h1`
  color: #222222;
  margin-bottom: -6.5%;
  font-weight: 700;
  font-size: 9rem;
  @media screen and (max-width: 1025px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 9rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 9rem;
  }
`

export const Date = styled.p`
  color: #222222;

  font-size: 0.875rem;
  line-height: 18px;
  @media screen and (max-width: 769px) {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 1.85rem;
    margin-top: 2rem;
  }
`


export const WeatherContainer = styled.div`
  margin-top: 2.31vh;
  margin-right: 2.08vw;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 426px) {
    display: none;
  }
`

export const City = styled.p`
  color: #222222;

  font-size: 0.875rem;
  line-height: 18px;
  @media screen and (max-width: 769px) {
    font-size: 1.2rem;
  }
`

export const WeatherTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const CloudIcon = styled.img`

  @media screen and (max-width: 1025px) {
    width: 4vw;
  }
`

export const Temperature = styled.p`
  color: #222222;
  height: 5vh;

  font-size: 3rem;
  font-weight: 700;
  line-height: 61px;
`

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  height: 77.8vh;
  @media screen and (max-width: 426px) {
    height: 67vh;
  }
  @media screen and (max-width: 281px) {
    height: 13%;
  }
`

export const ImageContainer = styled.div`
  position: relative;
`

export const UolImage = styled.img`
  width: 42.96vw;
  position: absolute;
  bottom: -4vw;
  left: -12vw;
  z-index: 0;
  @media screen and (max-width: 1561px) {
    display: none;
  }
`

export const MissionContainer = styled.div`
  margin-top: 15.37vh;
  margin-right: 6.97vw;
  text-align: right;
  z-index: 1;
  @media screen and (max-width: 426px) {
    margin-top: 7.5vh;
  }
`

export const MissionRedSmall = styled.p`
  color: #C12D18;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 46px;
  margin-bottom: -0.5%;
`

export const MissionRed = styled.p`
  color: #C12D18;
  font-weight: 700;
  font-size: 4rem;
  line-height: 81px;
  
  margin-top: 1.25%;
  margin-bottom: -1%;
  @media screen and (max-width: 426px) {
    font-size: 3.6rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 3rem;
  }
`

export const MissionNormal = styled.p`
  color: #222222;
  font-size: 1.5rem;
  line-height: 30px;
  margin-bottom: -1.5%;
  @media screen and (max-width: 769px) {
    font-size: 1.75rem;
  }
`



export const FooterHome = styled.footer`
  color: #FFFFFF;
  
  height: 9.25vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  z-index: 1;
  @media screen and (max-width: 426px) {
    height: 13vh;
  }
  @media screen and (max-width: 281px) {
    height: 25vh;
    justify-content: space-around;
    flex-direction: column;
  }
`

export const FooterSentence = styled.p`
  width: 28.17vw;

  font-size: 0.75rem;
  line-height: 0.951rem;
  text-align: right;
  margin-right: 1.82vw;
  @media screen and (max-width: 1025px) {
    width: 45vw;
  }
  @media screen and (max-width: 769px) {
    display: none;
  }
`

export const VerticalBar = styled.p`
  border: 1px solid #FFFFFF;
  height: 5.64vh;
  margin-right: 6.4vw;
  @media screen and (max-width: 769px) {
    display: none;
  }
`

export const RefreshContainer = styled.div`
  width: 12.44vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 19.21vw;
  @media screen and (max-width: 1025px) {
    width: 20vw;
    margin-right: 10vw;
  }
  @media screen and (max-width: 426px) {
    width: 30vw;
    margin-right: 0vw;
  }
  @media screen and (max-width: 376px) {
    margin-left: 5vw;
  }
  @media screen and (max-width: 321px) {
    margin-left: 3vw;
  }
  @media screen and (max-width: 281px) {
    width: 60vw;
    margin-left: 0;
  }
`

export const RefreshPhrase = styled.p`
  width: 5.67vw;
  font-size: 0.875rem;
  line-height: 18px;
  text-align: right;

  @media screen and (max-width: 1025px) {
    transition: 1s;
    width: 10vw;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 2rem;
    width: 20vw;
  }
  @media screen and (max-width: 321px) {
    font-size: 2rem;
    width: 25vw;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.75rem;
  }
`

export const RefreshTimerContainer = styled.div`
  width: 5.05vw;
  text-align: center;
  @media screen and (max-width: 1025px) {
    width: 7vw;
  }
  @media screen and (max-width: 426px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 321px) {
    margin-left: 2vw;
  }
  @media screen and (max-width: 281px) {
    font-size: 1.5rem;
    margin-left: 0;
    width: 17.5vw;
  }
`

export const RefreshTimer = styled.p`
  font-weight: 700;
  font-size: 3rem;
  @media screen and (max-width: 426px) {
    font-size: 4rem;
  }
  
`

export const HomeButtonsContainer = styled.div`
  display: flex;
  height: 100%;
`