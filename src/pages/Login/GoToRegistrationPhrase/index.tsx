import { GoToRegistrationLink, GoToRegistrationPhraseStyle } from './styles';

export default function GoToRegistrationPhrase() {
  return (
    <GoToRegistrationPhraseStyle>
      Ainda não possui um cadastro? Clique <GoToRegistrationLink href="/register">aqui</GoToRegistrationLink>
    </GoToRegistrationPhraseStyle>
  )
}