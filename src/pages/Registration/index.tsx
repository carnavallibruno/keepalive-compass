import { CompassImage, ImageSection } from '../Login/styles';
import { ContainerRegistration, ImageContainerRegister, FormRegisterContainer, RegisterSection, CompassImageMobile, RegisterFields, LabelRegister, RegisterAndCreateAccountButton, ImageSectionRegister } from './styles';
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
import { ErrorMessageLogin } from '../Login/ErrorMessageLogin';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../components/UI/variables';
import { PasswordRequirements, PasswordRequirementsContainer, PasswordRequirementsSubcontainer } from './PasswordMessages/index';
import { ErrorMessageRegisterButton, ButtonAndErrorMessage } from './ErrorMessageRegisterButton/index';
import { ErrorMessageRegisterInput } from './ErrorMessageRegisterInputs/index';


export default function Registration() {

  const { name, setName, email, setEmail, password, setPassword, repeatPassword, setRepeatPassword } = useContext(UserRegisterContext)

  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);
  const [errorCreateAccount, setErrorCreateAccount] = useState(false);

  const navigate = useNavigate()

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

    if (matchPassword && password.length >= 6) {
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

  function checkSpecialCharacter(password: string) {
    const regExSpecialCharacter = /[$&+,:;=?@#|'<>.^*()%!-]/
    const matchRegExSpecialCharacter = regExSpecialCharacter.test(password)

    if (matchRegExSpecialCharacter) {
      return true;
    } else {
      return false;
    }
  }

  function checkUpperCase(password: string) {
    const regExUpperCase = /[A-Z ]+/
    const matchRegExUpperCase = regExUpperCase.test(password)

    if (matchRegExUpperCase) {
      return true;
    } else {
      return false;
    }
  }

  function checkLowerCase(password: string) {
    const regExLowerCase = /[a-z ]+/
    const matchRegExLowerCase = regExLowerCase.test(password)

    if (matchRegExLowerCase) {
      return true;
    } else {
      return false;
    }
  }

  function checkForNumber(password: string) {
    const regExNumber = /[0-9]/;
    const matchRegExNumber = regExNumber.test(password)

    if (matchRegExNumber) {
      return true;
    } else {
      return false;
    }
  }

  function validateAll() {
    if (checkName(name) && checkEmail(email) && checkPassword(password) && comparePasswords(password, repeatPassword)) {
      return true;
    } else {
      setErrorCreateAccount(true);
      return false;
    }
  }

  return (
    <ContainerRegistration>
      <RegisterSection>
        <ImageContainerRegister>
          <CompassImageMobile
            src={compassImg}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
        </ImageContainerRegister>

        <FormRegisterContainer onSubmit={
          (event) => {
            if (validateAll()) {
              event.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  
                  const user = userCredential.user;
                  
                  const nameSurname = name.split(' ')
                  const firstName = nameSurname[0]
                  const lastName = nameSurname[1]
                  set(ref(database, 'users/' + user.uid), {
                    name: firstName,
                    surname: lastName,
                    email: email,
                  })
                  sessionStorage.setItem("Name", firstName)
                  alert('user created')
                  navigate('/')
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
                    value={name}
                    type='text'
                    onChange={(event: any) => setName(event.target.value)}
                    onBlur={() => { (name === '') || checkName(name) ? setErrorName(false) : setErrorName(true) }}
                    style={{ borderColor: `${errorName ? '#E9B425' : 'white'}` }}
                    placeholder="Nome completo"
                  />
                  {checkName(name) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.2} />}
                </InputContainer>
                {errorName && <ErrorMessageRegisterInput>Nome inválido.</ErrorMessageRegisterInput>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    value={email}
                    type='text'
                    onChange={(event: any) => setEmail(event.target.value)}
                    onBlur={() => { (email === '') || checkEmail(email) ? setErrorEmail(false) : setErrorEmail(true) }}
                    style={{ borderColor: `${errorEmail ? '#E9B425' : 'white'}` }}
                    placeholder="Email"
                  />
                  {checkEmail(email) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.2} />}
                </InputContainer>
                {errorEmail && <ErrorMessageRegisterInput>Email inválido.</ErrorMessageRegisterInput>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    value={password}
                    type='password'
                    onChange={(event: any) => setPassword(event.target.value)}
                    onBlur={() => { (password === '') || checkPassword(password) ? setErrorPassword(false) : setErrorPassword(true) }}
                    style={{ borderColor: `${errorPassword || errorRepeatPassword ? '#E9B425' : 'white'}`, fontSize: `${password !== '' ? '2rem' : '1rem'}` }}
                    placeholder="Senha"
                  />
                  {checkPassword(password) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.2} />}
                </InputContainer>
                {errorPassword && <ErrorMessageRegisterInput>Senha inválida.</ErrorMessageRegisterInput>}
              </InputAll>

              <InputAll>
                <InputContainer>
                  <StyledInput
                    value={repeatPassword}
                    type='password'
                    onChange={(event: any) => setRepeatPassword(event.target.value)}
                    onBlur={() => { comparePasswords(password, repeatPassword) || repeatPassword === '' ? setErrorRepeatPassword(false) : setErrorRepeatPassword(true) }}
                    style={{ borderColor: `${errorRepeatPassword ? '#E9B425' : 'white'}`, fontSize: `${repeatPassword !== '' ? '2rem' : '1rem'}` }}
                    placeholder="Repetir Senha"
                  />
                  {comparePasswords(password, repeatPassword) && checkPassword(password) ? <BsCheck size={60} color="#7CFC00" /> : <BsCheck size={60} opacity={0.2} />}
                </InputContainer>
                {(errorRepeatPassword) && <ErrorMessageRegisterInput>Senhas não coincidem.</ErrorMessageRegisterInput>}
              </InputAll>
            </RegisterFields>

            <PasswordRequirementsContainer>
              <PasswordRequirementsSubcontainer>
                <PasswordRequirements>
                  {password.length >= 6 ? <BsCheck size={30} color="#7CFC00" /> : <BsCheck size={30} opacity={0.2} />}
                  <p>6 caracteres</p>
                </PasswordRequirements>

                <PasswordRequirements>
                  {checkSpecialCharacter(password) ? <BsCheck size={30} color="#7CFC00" /> : <BsCheck size={30} opacity={0.2} />}
                  <p>1 caractere especial</p>
                </PasswordRequirements>

                <PasswordRequirements>
                  {checkUpperCase(password) ? <BsCheck size={30} color="#7CFC00" /> : <BsCheck size={30} opacity={0.2} />}
                  <p>1 letra maiúscula</p>
                </PasswordRequirements>

                <PasswordRequirements>
                  {checkLowerCase(password) ? <BsCheck size={30} color="#7CFC00" /> : <BsCheck size={30} opacity={0.2} />}
                  <p>1 letra minúscula</p>
                </PasswordRequirements>

                <PasswordRequirements>
                  {checkForNumber(password) ? <BsCheck size={30} color="#7CFC00" /> : <BsCheck size={30} opacity={0.2} />}
                  <p>1 número</p>
                </PasswordRequirements>
              </PasswordRequirementsSubcontainer>
            </PasswordRequirementsContainer>

            <ButtonAndErrorMessage>
              <ButtonCreateAccount>
                Criar conta
              </ButtonCreateAccount>
              {errorCreateAccount && <ErrorMessageRegisterButton>Um ou mais campos não foram preenchidos corretamente</ErrorMessageRegisterButton>}
            </ButtonAndErrorMessage>
          </RegisterAndCreateAccountButton>

          <GoToLoginPhrase />
        </FormRegisterContainer>
      </RegisterSection>

      <ImageSectionRegister>
        <CompassImage
          src={compassImg}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
        />
      </ImageSectionRegister>
    </ContainerRegistration>
  )
}

// regex for password (only missing the special type of letters) /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z&@._-&\:]{6,}$/