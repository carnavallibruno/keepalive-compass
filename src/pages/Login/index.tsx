import { useState, useContext } from 'react';
import { ContainerLogin, FormSection, FormContainer, ImageSection, Label, CompassImage, LoginContainer, LoginAndContinueButton, CompassImageMobile, ImageContainer } from './styles'
import { HeaderLogin } from "./HeaderLogin";
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from "../../components/ErrorMessage";
import GoToRegistrationPhrase from "./GoToRegistrationPhrase";
import { InputAll, InputContainer, StyledInput, UserIconContainer, PasswordIconContainer } from './InputLogin/index';
import { ButtonContinue } from './ButtonContinue/index';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './../../services/firebaseConfig';
import { update, ref } from 'firebase/database';
import { UserLoginContext } from './../../contexts/UserLoginContext';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLockClosed } from 'react-icons/hi';

export default function Login() {
  const navigate = useNavigate();
  const { username, setUsername, password, setPassword } = useContext(UserLoginContext)
  const [visible, setVisible] = useState(false)
  const [userInputFocused, setUserInputFocused] = useState(false)
  const [passwordInputFocused, setPasswordInputFocused] = useState(false)

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
              const userToken = (user.getIdToken().then((idToken) => {
                console.log(idToken)
              }))
              navigate('/home')
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

              <InputAll>
                <InputContainer>
                  <StyledInput
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(event: any) => setUsername(event.target.value)}
                    visible={visible}
                    onFocus={() => setUserInputFocused(true)}
                    onBlur={(event) =>
                      event.target.value.length > 0 ? setUserInputFocused(true) : setUserInputFocused(false)
                    }
                  // isPassword={false}
                  />
                  <UserIconContainer userInputFocused={userInputFocused}>
                    <AiOutlineUser size={24} />
                  </UserIconContainer>
                </InputContainer>
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(event: any) => setPassword(event.target.value)}
                    visible={visible}
                    onFocus={() => setPasswordInputFocused(true)}
                    onBlur={(event) =>
                      event.target.value.length > 0 ? setPasswordInputFocused(true) : setPasswordInputFocused(false)
                    }
                  // isPassword={true}
                  />
                  <PasswordIconContainer passwordInputFocused={passwordInputFocused}>
                    <HiOutlineLockClosed size={24} />
                  </PasswordIconContainer>
                </InputContainer>
              </InputAll>
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