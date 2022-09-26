import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  margin: 0 auto;

  width: 100%;
  height: 100%;
`

export const HomeNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  width: 7.8125vw;
  height: 3.9583vh;
`

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Time = styled.h1`
  color: #222222;
  margin-bottom: -6.5%;
  font-weight: 700;
  font-size: 9rem;
`

export const Date = styled.p`
  color: #222222;

  font-size: 14px;
  line-height: 18px;
`

export const City = styled.p`
  color: #222222;

  font-size: 14px;
  line-height: 18px;
`

export const Temperature = styled.p`
  color: #222222;

  font-size: 48px;
  font-weight: 700;
  line-height: 61px;
`

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
`

export const MissionContainer = styled.div`
  margin-top: 15.37vh;
  margin-right: 6.97vw;
  text-align: right;
`

export const MissionRedSmall = styled.p`
  color: #C12D18;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
`

export const MissionRed = styled.p`
  color: #C12D18;
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  margin-top: 1.25%;
  margin-bottom: -0.75%;
`

export const MissionNormal = styled.p`
  color: #222222;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: -1.5%;
`

export const UolImage = styled.img`
  margin-top: 5.83vh;
  margin-left: -12.13vw;

  width: 42.96vw;
  height: 76.38vh;
`

export const FooterHome = styled.footer`
  color: #FFFFFF;

  height: 9.25vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

  margin-top: 
`

export const FooterSentence = styled.p`
  width: 28.17vw;

  font-size: 0.75rem;
  line-height: 0.951rem;
  text-align: right;
  margin-right: 1.82vw;
`

export const VerticalBar = styled.p`
  border: 1px solid #FFFFFF;
  height: 5.64vh;
  margin-right: 6.4vw;
`

export const RefreshContainer = styled.div`
  width: 12.44vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 19.21vw;
`

export const RefreshPhrase = styled.p`
  width: 5.67vw;

  font-size: 0.875rem;
  line-height: 18px;

  text-align: right;
`

export const RefreshTimerContainer = styled.div`
  width: 5.05vw;
  text-align: center;
`

export const RefreshTimer = styled.p`
  font-weight: 700;
  font-size: 3rem;
`

export const HomeButtonsContainer = styled.div`
  display: flex;
`