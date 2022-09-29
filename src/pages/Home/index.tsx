import { useDate } from './Date/index';
import { useTimer } from './Timer/index';
import { useNavigate } from 'react-router-dom';
import ButtonHome from '../../components/ButtonHome';
import Logo from '../../assets/LogoCompasso-1.svg'
import BallLogo from '../../assets/bola-LogoCompasso.svg'
import Cloud from '../../assets/weather-cloud.svg'
import { LogoImage, ContainerHome, HomeNavbar, DateTimeContainer, Time, Date, City, Temperature, UolImage, Main, MissionContainer, MissionNormal, MissionRed, MissionRedSmall, FooterHome, FooterSentence, VerticalBar, RefreshPhrase, RefreshContainer, RefreshTimerContainer, RefreshTimer, HomeButtonsContainer, ImageContainer, WeatherContainer, WeatherTemperature, CloudIcon } from './styles';
import { useState, useEffect } from 'react';
import { Tempo } from './Weather';

export default function Home() {
  const { date, time } = useDate()
  const { refreshTimer } = useTimer()
  const navigate = useNavigate()
  const [ weather, setWeather] = useState({city: '', country: '', temperature: 0});
  useEffect(() => {
    Tempo().then((res) => {
      setWeather({city: res.name, country: res.sys.country, temperature: res.main.temp})
    })
  }, [])

  return (
    <ContainerHome>
      <HomeNavbar>
        <LogoImage 
          src={Logo}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{cursor: 'pointer'}}
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

          <WeatherTemperature>
            <CloudIcon src={Cloud}></CloudIcon>
            <Temperature>{weather.temperature.toFixed(0)}º</Temperature>
          </WeatherTemperature>

        </WeatherContainer>
      </HomeNavbar>

      <Main>
        <ImageContainer>
          <UolImage src={BallLogo} />
        </ImageContainer>

        <MissionContainer>
          <MissionRedSmall>Our mission is</MissionRedSmall>
          <MissionNormal>Nossa missão é</MissionNormal>
          <MissionRed>to transform the world</MissionRed>
          <MissionNormal>transformar o mundo</MissionNormal>
          <MissionRed>building digital experiences</MissionRed>
          <MissionNormal>construindo experiências digitais</MissionNormal>
          <MissionRed>that enable our client’s growth</MissionRed>
          <MissionNormal>que permitam o crescimento dos nossos clientes</MissionNormal>
        </MissionContainer>
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