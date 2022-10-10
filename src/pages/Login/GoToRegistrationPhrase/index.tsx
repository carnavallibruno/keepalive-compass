import { GoToRegistrationLink, GoToRegistrationPhraseStyle } from './styles';
import { useNavigate } from 'react-router-dom';

export default function GoToRegistrationPhrase() {
  const navigate = useNavigate()

  return (
    <GoToRegistrationPhraseStyle>
      Ainda não possui um cadastro? Clique <GoToRegistrationLink onClick={(e) => { e.preventDefault(); navigate('/register') }}>aqui</GoToRegistrationLink>
    </GoToRegistrationPhraseStyle>
  )
}