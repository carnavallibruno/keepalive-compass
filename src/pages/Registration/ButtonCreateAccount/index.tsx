import { StyledCreateAccountButton } from './styles';

interface ButtonProps {
  buttonTitle: string;
  visible: boolean;
}

export default function ButtonContinue({ buttonTitle }: ButtonProps) {
  return (
    <StyledCreateAccountButton>
      {buttonTitle}
    </StyledCreateAccountButton>
  )
}