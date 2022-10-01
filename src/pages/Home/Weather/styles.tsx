import styled from "styled-components";

export const WeatherContainer = styled.div`
  /* margin-top: 2.31vh;
  margin-right: 2.08vw; */
  display: flex;
  flex-direction: column;
  height: 46.15%;

  margin-top: 1.45%;
  
  @media screen and (max-width: 426px) {
    margin-top: 5%;
    height: 85%;
  }
  @media screen and (max-width: 321px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 281px) {
    height: 50%;
  }
`

export const City = styled.p`
  color: #222222;

  font-size: 0.875rem;
  line-height: 18px;
  @media screen and (max-width: 769px), (max-height: 426px) {
    color: white;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.75rem;
    line-height: 0px;
  }
`

export const WeatherTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 78.2%;
  
  @media screen and (max-width: 426px) {
    height: 60%;
  }
  @media screen and (max-width: 321px) {
    height: 50%;
  }
  @media screen and (max-width: 281px) {
    height: 100%;
  }
`

export const CloudIcon = styled.img`

`




export const Temperature = styled.p`
  color: #222222;
  height: 100%;

  font-size: 3rem;
  font-weight: 700;
  line-height: 61px;

  @media screen and (max-width: 769px), (max-height: 426px) {
    color: white;
  }
  @media screen and (max-width: 426px) {
    font-size: 2.75rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 2rem;
  }
`