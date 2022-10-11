import { FooterGreetingStyle } from './styles';
import { auth } from './../../../services/firebaseConfig';


export default function FooterGreeting() {

  return(
    <FooterGreetingStyle>Bem-vindo, {auth.currentUser?.displayName?.split(' ')[0]}</FooterGreetingStyle>
  )
}