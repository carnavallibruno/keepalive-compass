import styled from "styled-components";

export const WeatherContainer = styled.div`
  /* margin-top: 2.31vh;
  margin-right: 2.08vw; */
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1.45%;
  
  @media screen and (max-width: 769px), (max-height: 426px) {
    margin-top: 0%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    width: 35%;
    margin-right: 2%;
  }
  @media screen and (max-width: 769px) {
    width: 32.5%;
  }
  @media screen and (max-width: 541px) {
    width: 42.5%;
  }
  @media screen and (max-width: 426px) {
    width: 52.5%;
  }
  @media screen and (max-width: 391px) {
    width: 50%;
  }
  @media screen and (max-width: 376px) {
    width: 52.5%;
  }
  @media screen and (max-width: 321px) {
    flex-direction: column;
    justify-content: center;
  }
  

  @media screen and (max-height: 426px) {
    width: 30%;
  }
  @media screen and (max-height: 391px) {
    width: 31%;
  }
  @media screen and (max-height: 376px) {
    width: 35%;
  }
  @media screen and (max-height: 321px) {
    width: 45%;
  }
  @media screen and (max-height: 281px) {
    width: 37.5%;
  }
`

export const City = styled.p`
  color: #222222;

  font-size: 0.875rem;
  height: 18px;
  line-height: 18px;

  @media screen and (max-width: 769px), (max-height: 426px) {
    color: #FFFFFF;
  }
  @media screen and (max-width: 321px) {
    height: 12px;
  }
  /* @media screen and (max-width: 769px), (max-height: 426px) {
    color: white;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.75rem;
    line-height: 0px;
  } */
`

export const WeatherAndTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 50px;
  @media screen and (max-width: 769px) {
    width: 38%;
  }
  @media screen and (max-width: 541px) {
    
  }

  @media screen and (max-width: 391px) {
    width: 31%;
  }
  @media screen and (max-width: 376px) {
    width: 32.5%;
  }
  @media screen and (max-width: 321px) {
    height: 30px;
    justify-content: flex-end;
    width: 75%;
  }

  @media screen and (max-height: 426px) {
    justify-content: space-between;
    width: 30%;
  }
  @media screen and (max-height: 376px) {
    width: 32.5%;
  }
`

export const CloudIcon = styled.img`
  @media screen and (max-width: 769px) {
    height: 65%;
  }
  @media screen and (max-width: 541px) {
    height: 55%;
  }
  @media screen and (max-width: 391px) {
    height: 50%;
  }
  @media screen and (max-width: 376px) {
    height: 45%;
  }
  @media screen and (max-width: 321px) {
    height: 70%;
  }


  @media screen and (max-height: 426px) {
    height: 47.5%;
  }
  @media screen and (max-height: 391px) {
    height: 55%;
  }
  
  /*
  @media screen and (max-width: 281px) {
    height: 50%;
    margin-top: 0%;
  } */
`




export const Temperature = styled.p`
  color: #222222;
  height: 100%;

  font-size: 3rem;
  font-weight: 700;
  line-height: 61px;

  @media screen and (max-width: 769px), (max-height: 426px) {
    color: #FFFFFF;
    font-size: 2.25rem;
    line-height: 54px;
  }
  @media screen and (max-width: 541px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 391px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 321px) {
    line-height: 40px;
  }


  @media screen and (max-height: 426px) {
    line-height: 55px;
  }
  @media screen and (max-height: 391px) {
    font-size: 2rem;
  }
  @media screen and (max-height: 321px) {
    font-size: 1.75rem;
  }

  /* @media screen and (max-width: 769px), (max-height: 426px) {
    color: white;
  }
  @media screen and (max-width: 426px) {
    line-height: 40px;
    font-size: 2rem;
  }
  @media screen and (max-width: 321px) {
  }
  @media screen and (max-width: 281px) {
    line-height: 50px;
  } */
`