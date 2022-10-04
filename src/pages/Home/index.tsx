import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDate } from '../../components/Date';
import { DateTimeContainer, Time, Date } from '../../components/Date/styles';
import { LogoImage, ContainerHome, HomeNavbar, Main, FooterHome, FooterSentence, VerticalBar, HomeButtonsContainer, NavbarContainer, LogoImageLight } from './styles';
import ButtonHome from '../Home/ButtonHome';
import DarkLogo from '../../assets/LogoCompasso-1.svg'
import LightLogo from '../../assets/Logo-Compasso-Branco.svg'
import BallLogo from '../../assets/bola-LogoCompasso.svg'
import Mission from './Mission';
import { RefreshPhrase, RefreshContainer, RefreshTimerContainer, RefreshTimer } from '../../components/Timer/styles';
import { Weather } from '../../components/Weather'
import Timer from './../../components/Timer/index';

export default function Home() {
  const { date, time } = useDate()
  // const { refreshTimer } = useTimer()
  const navigate = useNavigate()


  return (
    <ContainerHome>
      <NavbarContainer>
        <HomeNavbar>
          <LogoImage
            src={DarkLogo}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
          <LogoImageLight
            src={LightLogo}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
          <DateTimeContainer>
            <Time>
              {time}
            </Time>

            <Date>
              {date}
            </Date>
          </DateTimeContainer>

          <Weather />
          
        </HomeNavbar>
      </NavbarContainer>

      <Main>
        <Mission />
      </Main>

      <FooterHome>
        <FooterSentence>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</FooterSentence>

        <VerticalBar></VerticalBar>

        <Timer />

        <HomeButtonsContainer>
          <ButtonHome
            buttonTitle='Continuar Navegando'
            destination='https://compass.uol/pt/home'
          />

          <ButtonHome
            buttonTitle='Logout'
            destination='/'
          />
        </HomeButtonsContainer>

      </FooterHome>
    </ContainerHome>
  )
}