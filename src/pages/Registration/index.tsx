import { CompassImage, ImageSection } from '../Login/styles';
import { ContainerRegistration, ImageContainer, FormRegisterContainer, RegisterSection, CompassImageMobile, RegisterFields, LabelRegister, RegisterAndCreateAccountButton } from './styles';
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { HeaderRegistration } from './HeaderRegistration/index';
import { useState, useContext } from 'react';
import GoToLoginPhrase from './GoToLoginPhrase/index';
import { InputAll, InputContainer, StyledInput } from './InputRegister';
import { UserRegisterContext } from './../../contexts/UserRegisterContext';
import { ButtonCreateAccount } from './ButtonCreateAccount/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { database } from '../../services/firebaseConfig';
import { ref, set } from 'firebase/database';
import { auth } from './../../services/firebaseConfig';


export default function Registration() {

  const [visible, setVisible] = useState(false);
  const { name, setName, surname, setSurname, email, setEmail, password, setPassword, repeatPassword, setRepeatPassword } = useContext(UserRegisterContext)

  
  return (
    <ContainerRegistration>
      <RegisterSection>
        <ImageContainer>
          <CompassImageMobile
            src={compassImg}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
        </ImageContainer>

        <FormRegisterContainer onSubmit={
          (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                set(ref(database, 'users/' + user.uid), {
                  name: name,
                  surname: surname,
                  email: email,
                })
                alert('user created')
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
              });
          }
        }>
          <HeaderRegistration />

          <RegisterAndCreateAccountButton>
            <LabelRegister>Cadastro</LabelRegister>

            <RegisterFields>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    visible={visible}
                    value={name}
                    type='text'
                    onChange={(event: any) => setName(event.target.value)}
                    placeholder="Nome"
                  />
                </InputContainer>
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    visible={visible}
                    value={surname}
                    type='text'
                    onChange={(event: any) => setSurname(event.target.value)}
                    placeholder="Sobrenome"
                  />
                </InputContainer>
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    visible={visible}
                    value={email}
                    type='email'
                    onChange={(event: any) => setEmail(event.target.value)}
                    placeholder="Email"
                  />
                </InputContainer>
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    visible={visible}
                    value={password}
                    type='password'
                    onChange={(event: any) => setPassword(event.target.value)}
                    placeholder="Senha"
                  />
                </InputContainer>
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    visible={visible}
                    value={repeatPassword}
                    type='password'
                    onChange={(event: any) => setRepeatPassword(event.target.value)}
                    placeholder="Repetir Senha"
                  />
                </InputContainer>
              </InputAll>

            </RegisterFields>

            <ButtonCreateAccount>
              Criar conta
            </ButtonCreateAccount>

          </RegisterAndCreateAccountButton>

          <GoToLoginPhrase />
        </FormRegisterContainer>
      </RegisterSection>

      <ImageSection>
        <CompassImage
          src={compassImg}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
        />
      </ImageSection>
    </ContainerRegistration>
  )
}