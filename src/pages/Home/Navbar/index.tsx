
import { NavbarContainer, LogoImage } from './styles';
import { HomeNavbar, LogoImageLight } from './styles';
import { DateTimeContainer } from '../../../components/Date/styles';
import { Time, Date } from '../../../components/Date/styles';
import { useDate } from '../../../components/Date';
import { Weather } from './../../../components/Weather/index';

import DarkLogo from '../../../assets/LogoCompasso-1.svg'
import LightLogo from '../../../assets/Logo-Compasso-Branco.svg'

export default function Navbar() {
  const { date, time } = useDate()

  return (
    <NavbarContainer>
      <HomeNavbar>
        <LogoImage
          src={DarkLogo}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
        />
        <LogoImageLight
          src={LightLogo}
          onClick={() => window.open('https://compass.uol/pt/home', '_blank')} style={{ cursor: 'pointer' }}
        />
        <DateTimeContainer>
          <Time>
            {time}
          </Time>

          <Date>
            {date}
          </Date>
        </DateTimeContainer>

        <Weather />

      </HomeNavbar>
    </NavbarContainer>
  )
}