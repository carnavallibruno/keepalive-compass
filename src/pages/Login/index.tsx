import Input from "./Input";
import { useState } from 'react';
import { Description, Titulo, Container, FormSection, FormContainer, ImageSection, Label, CompassImage } from './styles'
import compassImg from '../../assets/Logo-Compasso-Branco.svg'
import ButtonContinue from '../../components/ButtonContinue';

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <FormSection>
        <FormContainer>
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
            user={password}
            setUser={setPassword}
          />

          <ButtonContinue
            buttonTitle='Continuar'
            destination={"/home"}
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