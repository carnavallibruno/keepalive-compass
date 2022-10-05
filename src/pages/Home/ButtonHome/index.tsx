import { useNavigate } from 'react-router-dom';
import { StyledHomeButton } from './styles';

interface ButtonProps {
  buttonTitle: string;
  destination: string;
  children?: React.ReactNode;
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