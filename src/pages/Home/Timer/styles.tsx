import styled from "styled-components";

export const RefreshContainer = styled.div`
  width: 12.44%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 19.21%;
  @media screen and (max-width: 1441px) {
    margin-right: 0%;
    width: 15%;
  }
  @media screen and (max-width: 1025px) {
    justify-content: center;
    width: 50%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 75%;
    height: 50%;
  }
  @media screen and (max-width: 426px) { 
    justify-content: space-between;
  }
  @media screen and (max-width: 321px) {
    width: 85%;
  }
  @media screen and (max-width: 281px) {
    width: 70%;
    height: 50%;
  }

  @media screen and (max-height: 321px) {
    width: 100%;
  }
`

export const RefreshPhrase = styled.p`
  width: 45.63%;
  font-size: 0.875rem;
  line-height: 18px;
  text-align: right;
  @media screen and (max-width: 1025px) {
    width: 30%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 75%;
    font-size: 2rem;
  }
  @media screen and (max-width: 426px) {
    width: 50%;
    font-size: 1.6rem;
    line-height: 35px;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 281px) {
    width: 50%;
    font-size: 1rem;
    line-height: 25px;
  }

  @media screen and (max-height: 376px) {
    width: 90%;
  }
  @media screen and (max-height: 321px) {
    width: 65%;
    font-size: 1.75rem;
  }
  @media screen and (max-height: 281px) {
    width: 55%;
  }
`

export const RefreshTimerContainer = styled.div`
  width: 40.61%;
  text-align: center;
  @media screen and (max-height: 321px) {
    width: 25%;
  }
`

export const RefreshTimer = styled.p`
  font-weight: 700;
  font-size: 3rem;
`