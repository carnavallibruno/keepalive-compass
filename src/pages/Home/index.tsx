import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDate } from '../../components/Date';
import { DateTimeContainer, Time, Date } from '../../components/Date/styles';
import { LogoImage, ContainerHome, HomeNavbar, Main, FooterHome, FooterSentence, VerticalBar, HomeButtonsContainer, NavbarContainer, LogoImageLight } from './styles';
import ButtonHome from '../Home/ButtonHome';
import DarkLogo from '../../assets/LogoCompasso-1.svg'
import LightLogo from '../../assets/Logo-Compasso-Branco.svg'
import BallLogo from '../../assets/bola-LogoCompasso.svg'
import Cloud from '../../assets/weather-cloud.svg'
import Mission from './Mission';
import { useTimer } from '../../components/Timer';
import { RefreshPhrase, RefreshContainer, RefreshTimerContainer, RefreshTimer } from '../../components/Timer/styles';
import { Tempo } from '../../components/Weather';
import { City, Temperature, WeatherContainer, WeatherAndTemperature, CloudIcon } from '../../components/Weather/styles'

export default function Home() {
  const { date, time } = useDate()
  const { refreshTimer } = useTimer()
  const navigate = useNavigate()
  const [weather, setWeather] = useState({ city: '', country: '', temperature: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function(position) {     
      let latitude = -15.793889 || position.coords.latitude;
      let longitude = -47.882778 || position.coords.longitude;
      Tempo().then((res) => {
        setWeather({ city: res.name, country: res.sys.country, temperature: res.main.temp })
      })
    })
  }, [])

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

          <WeatherContainer>
            <City>{weather.city} - {weather.country}</City>

            <WeatherAndTemperature>
              <CloudIcon src={Cloud}></CloudIcon>
              <Temperature>{weather.temperature.toFixed(0)}º</Temperature>
            </WeatherAndTemperature>

          </WeatherContainer>
        </HomeNavbar>
      </NavbarContainer>

      <Main>
        <Mission />
      </Main>

      <FooterHome>
        <FooterSentence>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</FooterSentence>

        <VerticalBar></VerticalBar>

        <RefreshContainer>
          <>
            <RefreshPhrase>Application refresh in</RefreshPhrase>

            <RefreshTimerContainer>
              <RefreshTimer>{refreshTimer < 10 ? `0${refreshTimer}` : refreshTimer}</RefreshTimer>
              <p>seconds</p>
            </RefreshTimerContainer>

            {refreshTimer == 0 ? navigate('/') : null}
          </>
        </RefreshContainer>

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