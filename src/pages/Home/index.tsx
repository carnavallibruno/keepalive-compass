import Weather from './Weather';
import { useDate } from './Date/index';
import { useTimer } from './Timer/index';
import { useNavigate } from 'react-router-dom';
import ButtonContinue from '../../components/ButtonContinue';
import Logo from '../../assets/LogoCompasso-1.svg'
import BallLogo from '../../assets/bola-LogoCompasso.svg'
import { LogoImage, ContainerHome, HomeNavbar, DateTimeContainer, Time, Date, City, Temperature, UolImage, Main, MissionContainer, MissionNormal, MissionRed, MissionRedSmall } from './styles';

export default function Home() {
  const { date, time } = useDate()
  const { refreshTimer } = useTimer()
  const navigate = useNavigate()

  return (
    <ContainerHome>
      <HomeNavbar>
        <LogoImage src={Logo} />
        <DateTimeContainer>
          <Time>
            {time}
          </Time>

          <Date>
            {date}
          </Date>
        </DateTimeContainer>

        <div>
          <City>Passo Fundo - RS</City>
          <Temperature>22º</Temperature>
        </div>
      </HomeNavbar>

      <Main>
        <div>
          <UolImage src={BallLogo} />
        </div>

        <MissionContainer>
          <MissionRedSmall>Our mission is</MissionRedSmall>
          <MissionNormal>Nossa missão é</MissionNormal>
          <MissionRed>to transform the world</MissionRed>
          <MissionNormal>transformar o mundo</MissionNormal>
          <MissionRed>building digital experiences</MissionRed>
          <MissionNormal>construindo experiências digitais</MissionNormal>
          <MissionRed>that enable our client's growth</MissionRed>
          <MissionNormal>que permitam o crescimento dos nossos clientes</MissionNormal>
        </MissionContainer>
      </Main>

      <footer>
        <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
        <p>|</p>

        <div>
          <>
            <p>Application refresh in</p>
            {refreshTimer}
            {refreshTimer == 0 ? navigate('/') : null}
          </>
        </div>

        <ButtonContinue
          buttonTitle='Continuar Navegando'
          destination='https://compass.uol/pt/home'
        />

        <ButtonContinue
          buttonTitle='Logout'
          destination='/'
        />

      </footer>
    </ContainerHome>
  )
}