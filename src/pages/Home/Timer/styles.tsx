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
  @media screen and (max-width: 821px) {
    width: 60%;
  }
  @media screen and (max-width: 769px), (max-height: 426px) {
    width: 60%;
  }
  @media screen and (max-width: 541px) {
    width: 80%;
  }
  @media screen and (max-width: 426px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 321px) {
    width: 85%;
  }
  @media screen and (max-width: 281px) {
    width: 85%;
    height: 30%;
  }

  @media screen and (max-height: 426px) {
    width: 60%;
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
    font-size: 1.75rem;
  }
  @media screen and (max-width: 721px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 541px) {
    width: 50%;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 426px) {
    width: 70%;
    font-size: 1.25rem;
    line-height: 30px;
  }
  @media screen and (max-width: 391px) {
    width: 47.5%;
  }
  @media screen and (max-width: 376px) {
    font-size: 1.3rem;
    width: 50%;
  }
  @media screen and (max-width: 321px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 281px) {
    width: 60%;
    font-size: 1rem;
    line-height: 25px;
  }


  @media screen and (max-height: 426px) {
    width: 50%;
    font-size: 1.5rem;
  }
  @media screen and (max-height: 376px) {
    width: 62%;
    font-size: 1.5rem;
  }
  @media screen and (max-height: 321px) {
    width: 55%;
  }
  @media screen and (max-height: 281px) {
    width: 40%;
  }
`

export const RefreshTimerContainer = styled.div`
  width: 20%;
  text-align: center;
  @media screen and (max-width: 1025px) {
    width: 32.5%;
  }
  @media screen and (max-width: 769px) {
    width: 37.5%;
  }
  @media screen and (max-width: 426px) {
    width: 45%;
  }
  @media screen and (max-width: 281px) {
    width: 70%;
  }

  @media screen and (max-height: 426px) {
    width: 30%;
  }
  @media screen and (max-height: 321px) {
    /* width: 25%; */
  }
  @media screen and (max-height: 281px) {
    width: 25%;
  }
`

export const RefreshTimer = styled.p`
  font-weight: 700;
  font-size: 3rem;
  @media screen and (max-width: 769px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 391px) {
    font-size: 2.25rem;
  }
`