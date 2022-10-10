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
import { BsCheck } from 'react-icons/bs'
import { ErrorMessage } from '../../components/ErrorMessage';


export default function Registration() {

  const { name, setName, surname, setSurname, email, setEmail, password, setPassword, repeatPassword, setRepeatPassword } = useContext(UserRegisterContext)

  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);
  const [errorCreateAccount, setErrorCreateAccount] = useState(false);

  function checkName(name: string) {
    const regExName = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
    const matchName = regExName.test(name)
    if (matchName) {
      return true;
    } else {
      return false;
    }
  }

  function checkEmail(email: string) {
    const regExEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const matchEmail = regExEmail.test(email);

    if (matchEmail) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkPassword(password: string) {
    const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z~`!@#$%^&*()-_+={}[]|\/:;"'<>,.?]{6,}$/
    const matchPassword = regExPassword.test(password)

    if (matchPassword) {
      return true;
    } else {
      return false
    }
  }

  function comparePasswords(password: string, repeatPassword: string) {
    if (password === repeatPassword && (password && repeatPassword != '')) {
      return true;
    } else {
      return false;
    }
  }

  function validateAll() {
    if (checkName(name) && checkName(surname) && checkEmail(email) && checkPassword(password) && comparePasswords(password, repeatPassword)) {
      return true;
    } else {
      setErrorCreateAccount(true);
      return false;
    }
  }

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
          (event) => {
            if (validateAll()) {
              event.preventDefault();
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
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert(errorMessage)
                });
            } else {
              event.preventDefault()

              return (alert('Deu errado'))
            }
          }
        }>
          <HeaderRegistration />

          <RegisterAndCreateAccountButton>
            <LabelRegister>Cadastro</LabelRegister>

            <RegisterFields>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    errorName={errorName}
                    value={name}
                    type='text'
                    onChange={(event: any) => setName(event.target.value)}
                    onBlur={() => { (name === '') || checkName(name) ? setErrorName(false) : setErrorName(true) }}
                    placeholder="Nome"
                  />
                  {checkName(name) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.3} />}
                </InputContainer>
                {errorName && <ErrorMessage>Nome inválido.</ErrorMessage>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    errorSurname={errorSurname}
                    value={surname}
                    type='text'
                    onChange={(event: any) => setSurname(event.target.value)}
                    onBlur={() => { (surname === '') || checkName(surname) ? setErrorSurname(false) : setErrorSurname(true) }}
                    placeholder="Sobrenome"
                  />
                  {checkName(surname) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.3} />}
                </InputContainer>
                {errorSurname && <ErrorMessage>Sobrenome inválido.</ErrorMessage>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    errorEmail={errorEmail}
                    value={email}
                    type='email'
                    onChange={(event: any) => setEmail(event.target.value)}
                    onBlur={() => { (email === '') || checkEmail(email) ? setErrorEmail(false) : setErrorEmail(true) }}
                    placeholder="Email"
                  />
                  {checkEmail(email) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.3} />}
                </InputContainer>
                {errorEmail && <ErrorMessage>Email inválido.</ErrorMessage>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    value={password}
                    type='password'
                    onChange={(event: any) => setPassword(event.target.value)}
                    onBlur={() => { (password === '') || checkPassword(password) ? setErrorPassword(false) : setErrorPassword(true) }}
                    placeholder="Senha"
                  />
                  {comparePasswords(password, repeatPassword) && checkPassword(password) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.3} />}
                </InputContainer>
                {errorPassword && <ErrorMessage>Senha inválida.</ErrorMessage>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    value={repeatPassword}
                    type='password'
                    onChange={(event: any) => setRepeatPassword(event.target.value)}
                    onBlur={() => { comparePasswords(password, repeatPassword) ? setErrorRepeatPassword(false) : setErrorRepeatPassword(true) }}
                    placeholder="Repetir Senha"
                  />
                  {comparePasswords(password, repeatPassword) && checkPassword(password) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.3} />}
                </InputContainer>
                {(errorRepeatPassword) && <ErrorMessage>Senhas não coincidem.</ErrorMessage>}
              </InputAll>

            </RegisterFields>

            <ButtonCreateAccount>
              Criar conta
            </ButtonCreateAccount>
            {errorCreateAccount && <ErrorMessage>Um ou mais campos não foram preenchidos corretamente</ErrorMessage>}

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

// regex for password (only missing the special type of letters) /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z&@._-&\:]{6,}$/