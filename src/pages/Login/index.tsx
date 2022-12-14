import { useState, useContext, useEffect } from 'react';
import { ContainerLogin, FormSection, FormContainer, ImageSection, Label, CompassImage, LoginContainer, LoginAndContinueButton, CompassImageMobile, ImageContainer } from './styles'
import { HeaderLogin } from "./HeaderLogin";
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { useNavigate } from 'react-router-dom';
import { ErrorMessageLogin } from "./ErrorMessageLogin";
import GoToRegistrationPhrase from "./GoToRegistrationPhrase";
import { InputAll, InputContainer, StyledInput, UserIconContainer, PasswordIconContainer } from './InputLogin/index';
import { ButtonContinue } from './ButtonContinue/index';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './../../services/firebaseConfig';
import { update, ref } from 'firebase/database';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLockClosed } from 'react-icons/hi';

export default function Login() {
  const navigate = useNavigate();
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

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
              // ? Signed in
              const user = userCredential.user;
              update(ref(database, 'users/' + user.uid), {
                lastLogin: new Date(),
              })
              
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
                    placeholder="Usu??rio"
                    value={username}
                    onChange={(event: any) => setUsername(event.target.value)}
                    visible={visible}
                    onFocus={() => setUserInputFocused(true)}
                    onBlur={(event) =>
                      event.target.value.length > 0 ? setUserInputFocused(true) : setUserInputFocused(false)
                    }
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
                    style={{ fontSize: `${password !== '' ? '2rem' : '1rem'}` }}
                    onBlur={(event) =>
                      event.target.value.length > 0 ? setPasswordInputFocused(true) : setPasswordInputFocused(false)
                    }
                  />
                  <PasswordIconContainer passwordInputFocused={passwordInputFocused}>
                    <HiOutlineLockClosed size={24} />
                  </PasswordIconContainer>
                </InputContainer>
              </InputAll>
            </LoginContainer>
            {visible && <ErrorMessageLogin>Ops, usu??rio ou senha inv??lidos. Tente novamente!</ErrorMessageLogin>}

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