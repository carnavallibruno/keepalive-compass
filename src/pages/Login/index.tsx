import Input from "./Input";
import { useState } from 'react';
import { Container, FormSection, FormContainer, ImageSection, Label, CompassImage, LoginContainer, LoginAndContinueButton, CompassImageMobile, ImageContainer } from './styles'
import { Header } from "./Header";
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { useNavigate } from 'react-router-dom';
import ButtonContinue from './ButtonContinue';
import { ErrorMessage } from "./ErrorMessage";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  function userValidate(user: string) {
    const userRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const userRegexCheck = userRegex.test(user);

    if (userRegexCheck) {
      return true;
    } else {
      return false;
    }
  }

  function passwordValidate(password: string) {
    if (password.length < 3) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <Container>
      <FormSection>
        <ImageContainer>
          <CompassImageMobile
            src={compassImg}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
        </ImageContainer>
        <FormContainer onSubmit={(event) => {
          event.preventDefault();
          (!passwordValidate(password))
            ? setVisible(true)
            : navigate('/home')
          }}>

          <Header />

          <LoginAndContinueButton>
            <LoginContainer>
              <Label>Login</Label>

              <Input
                type="text"
                placeholder="Usuário"
                user={user}
                setUser={setUser}
                visible={visible}
              />

              <Input
                type="password"
                placeholder="Senha"
                password={password}
                setPassword={setPassword}
                visible={visible}
                isPassword
              />
            </LoginContainer>

            {visible && <ErrorMessage>Ops, usuário ou senha inválidos. Tente novamente!</ErrorMessage>}

            <ButtonContinue
              buttonTitle='Continuar'
              visible={visible}
            />
          </LoginAndContinueButton>

        </FormContainer>
      </FormSection>

      <ImageSection>
        <CompassImage
          src={compassImg}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
        />
      </ImageSection>

    </Container>
  )
}