import { useNavigate } from 'react-router-dom';
import { StyledHomeButton } from './styles';

interface ButtonProps {
  buttonTitle: string;
  destination: string;
}

export default function ButtonHome({ destination, buttonTitle }: ButtonProps) {
  const navigate = useNavigate()
  return (
    <StyledHomeButton
    onClick={() => destination.includes('https://')
    ? window.open('https://compass.uol/pt/home', '_blank')
    : navigate(`${destination}`) }>{buttonTitle}</StyledHomeButton>
  )
}

// window.open('https://compass.uol/pt/home', 'Compass', "height=1200,width=1200")