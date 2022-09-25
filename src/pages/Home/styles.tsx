import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  margin: 0 auto;

  width: 100%;
  height: 100%;

  font-family: 'Mark Pro';
  font-weight: 400;
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
  border: 1px solid red ;
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