import { VerticalBar, FooterHome } from './styles';
import { FooterSentence, HomeButtonsContainer } from './styles';
import Timer from './../../../components/Timer/index';
import ButtonHome from '../../Home/ButtonHome';
import FooterGreeting from './../FooterGreeting/index';

export default function Footer() {
  return(
    <FooterHome>
        <FooterGreeting />
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
  )
}