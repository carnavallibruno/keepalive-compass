import { GoToRegistrationLink, GoToRegistrationPhraseStyle } from './styles';

export default function GoToRegistrationPhrase() {
  return (
    <GoToRegistrationPhraseStyle>
      Já possui um cadastro? Clique <GoToRegistrationLink href="/register">aqui</GoToRegistrationLink>
    </GoToRegistrationPhraseStyle>
  )
}