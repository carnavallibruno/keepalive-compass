import { VerticalBar, FooterHome } from './styles';
import { FooterSentence, HomeButtonsContainer } from './styles';
import Timer from './../../../components/Timer/index';
import { ButtonHome } from '../../Home/ButtonHome';
import FooterGreeting from './../FooterGreeting/index';
import { UserLoginContext } from './../../../contexts/UserLoginContext';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './../../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
    navigate('/')
  }
  
  return (
    <FooterHome>
      <FooterGreeting />
      <FooterSentence>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</FooterSentence>

      <VerticalBar></VerticalBar>

      <Timer />

      <HomeButtonsContainer>
        <ButtonHome onClick={() => window.open('https://compass.uol/pt/home', '_blank')}>
          Continuar Navegando
        </ButtonHome>

        <ButtonHome onClick={() => logOut()}>
          Logout
        </ButtonHome>
        
      </HomeButtonsContainer>

    </FooterHome>
  )
}