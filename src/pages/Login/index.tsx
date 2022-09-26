import Input from "./Input";
import { useState } from 'react';
import { Description, Titulo, Container, FormSection, FormContainer, ImageSection, Label, CompassImage } from './styles'
import compassImg from '../../assets/Logo-Compasso-Branco.svg'
import { Navigate, useNavigate } from 'react-router-dom';
import ButtonContinue from './../../components/ButtonContinue';
import { ErrorMessage } from "./ErrorMessage";

export default function Login() {
  const navigate = useNavigate()
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
    if (password == '') {
      return false;
    } else {
      return true;
    }
  }

  return (
    <Container>
      <FormSection>
        <FormContainer onSubmit={(event) => {
          event.preventDefault();
          (!passwordValidate(password))
            ? setVisible(true)
            : navigate('/home')
        }}>

          <Titulo>Olá,</Titulo>

          <Description>Para continuar navegando de forma segura, efetue o login na rede.</Description>

          <Label>Login</Label>

          <Input
            type="text"
            placeholder="Usuário"
            user={user}
            setUser={setUser}
          />

          <Input
            type="password"
            placeholder="Senha"
            password={password}
            setPassword={setPassword}
          />

          {visible && <ErrorMessage>Ops, usuário ou senha inválidos. Tente novamente!</ErrorMessage>}

          <ButtonContinue
            buttonTitle='Continuar'
          />

        </FormContainer>
      </FormSection>

      <ImageSection>
        <CompassImage
          src={compassImg}
        />
      </ImageSection>

    </Container>

  )
}