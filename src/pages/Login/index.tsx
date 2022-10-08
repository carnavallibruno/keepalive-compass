import { useState, useContext } from 'react';
import { ContainerLogin, FormSection, FormContainer, ImageSection, Label, CompassImage, LoginContainer, LoginAndContinueButton, CompassImageMobile, ImageContainer } from './styles'
import { HeaderLogin } from "./HeaderLogin";
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from "./ErrorMessage";
import GoToRegistrationPhrase from "./GoToRegistrationPhrase";
import InputLogin from './InputLogin/index';
import { ButtonContinue } from './ButtonContinue/index';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './../../services/firebaseConfig';
import { update, ref } from 'firebase/database';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <ContainerLogin>
      <FormSection>
        <ImageContainer>
          <CompassImageMobile
            src={compassImg}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
        </ImageContainer>

        <FormContainer onSubmit={(event) => {
          event.preventDefault();
          signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              update(ref(database, 'users/' + user.uid), {
                lastLogin: new Date(),
              })
              alert('sign in successful!')
              navigate('/home')
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setVisible(true)
            });
        }}
        >

          <HeaderLogin />

          <LoginAndContinueButton>
            <LoginContainer>
              <Label>Login</Label>

              <InputLogin
                type="text"
                placeholder="Usuário"
                username={username}
                setUsername={setUsername}
                visible={visible}
              />

              <InputLogin
                type="password"
                placeholder="Senha"
                password={password}
                setPassword={setPassword}
                visible={visible}
                isPassword
              />
            </LoginContainer>

            {visible && <ErrorMessage>Ops, usuário ou senha inválidos. Tente novamente!</ErrorMessage>}

            <ButtonContinue>Continuar</ButtonContinue>

          </LoginAndContinueButton>
          <GoToRegistrationPhrase />
        </FormContainer>
      </FormSection>

      <ImageSection>
        <CompassImage
          src={compassImg}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
        />
      </ImageSection>

    </ContainerLogin>
  )
}