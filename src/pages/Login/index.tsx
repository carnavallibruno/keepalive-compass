import Input from "./Input";
import { useState } from 'react';
import { Description, Titulo, Container, FormSection, FormContainer, ImageSection, Label, CompassImage, LoginContainer, Header, Form } from './styles'
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import ButtonContinue from './../../components/ButtonContinue';
import { ErrorMessage } from "./ErrorMessage";
import OpenWeatherMap from 'openweathermap-ts';

export default function Login() {
  const openWeather = new OpenWeatherMap({
    apiKey: '95c4c99887881db2f5237d13c18a994b'
  });

  openWeather.getCurrentWeatherByCityName({
    cityName: 'Florianopolis'
  })
    .then((weather) => console.log('Weather object is', weather));

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
        <FormContainer onSubmit={(event) => {
          event.preventDefault();
          (!passwordValidate(password))
            ? setVisible(true)
            : navigate('/home')
        }}>

          <Header>
            <Titulo>Olá,</Titulo>
            <Description>Para continuar navegando de forma segura, efetue o login na rede.</Description>
          </Header>

          <Form>
            <LoginContainer>
              <Label>Login</Label>
              
              <Input
                type="text"
                placeholder="Usuário"
                user={user}
                setUser={setUser}
                visible={visible}
                isPassword={false}
              />

              <Input
                type="password"
                placeholder="Senha"
                password={password}
                setPassword={setPassword}
                visible={visible}
                isPassword={true}
              />
            </LoginContainer>

            {visible && <ErrorMessage>Ops, usuário ou senha inválidos. Tente novamente!</ErrorMessage>}

            <ButtonContinue
              buttonTitle='Continuar'
              visible={visible}
            />
          </Form>

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