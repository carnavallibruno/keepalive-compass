import { useNavigate } from 'react-router-dom';
import { StyledContinueButton } from './style';

interface ButtonProps {
  buttonTitle: string;
  destination: string;
}

export default function ButtonContinue({ destination, buttonTitle }: ButtonProps) {
  const navigate = useNavigate()
  return (
    <StyledContinueButton 
    onClick={() => destination.includes('https://')
    ? window.open('https://compass.uol/pt/home', '_blank') 
    : navigate(`${destination}`) }>{buttonTitle}</StyledContinueButton>
  )
}