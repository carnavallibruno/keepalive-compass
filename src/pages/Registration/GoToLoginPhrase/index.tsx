import { GoToLoginPhraseStyle, GoToLoginLink } from './styles';
import { useNavigate } from 'react-router-dom';

export default function GoToLoginPhrase() {
  const navigate = useNavigate()

  return (
    <GoToLoginPhraseStyle>
      Já possui um cadastro? Clique <GoToLoginLink onClick={(e) => { e.preventDefault(); navigate('/') }}>aqui</GoToLoginLink>
    </GoToLoginPhraseStyle>
  )
}