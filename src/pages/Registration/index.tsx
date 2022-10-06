import { CompassImage, ImageSection } from '../Login/styles';
import { ContainerRegistration, ImageContainer, FormRegisterContainer, RegisterSection, CompassImageMobile, RegisterFields, LabelRegister, RegisterAndCreateAccountButton } from './styles';
import compassImg from '../../assets/Logo-Compasso-Branco.svg';
import { HeaderRegistration } from './HeaderRegistration/index';
import Input from './../Login/Input/index';
import { useState } from 'react';
import GoToLoginPhrase from './GoToLoginPhrase/index';
import ButtonCreateAccount from './ButtonCreateAccount';


export default function Registration() {
  const [visible, setVisible] = useState(false);

  return (
    <ContainerRegistration>
      <RegisterSection>
        <ImageContainer>
          <CompassImageMobile
            src={compassImg}
            onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
          />
        </ImageContainer>

        <FormRegisterContainer>
          <HeaderRegistration />

          <RegisterAndCreateAccountButton>
            <LabelRegister>Cadastro</LabelRegister>
            <RegisterFields>
              <Input
                type="text"
                placeholder="Email"
                visible={visible}
              />

              <Input
                type="text"
                placeholder="Nome"
                visible={visible}
              />

              <Input
                type="text"
                placeholder="Sobrenome"
                visible={visible}
              />

              <Input
                type="password"
                placeholder="Senha"
                visible={visible}
              />

              <Input
                type="password"
                placeholder="Repetir senha"
                visible={visible}
              />
            </RegisterFields>

            <ButtonCreateAccount
              buttonTitle='Criar conta'
              visible={visible}
            />
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