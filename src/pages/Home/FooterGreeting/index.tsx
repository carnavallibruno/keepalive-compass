import { FooterGreetingStyle } from './styles';


export default function FooterGreeting() {
  const name = sessionStorage.getItem("Name")

  return(
    <FooterGreetingStyle>Bem-vindo, {name === null ? "convidado" : name}</FooterGreetingStyle>
  )
}