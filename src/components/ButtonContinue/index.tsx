import { StyledContinueButton } from './style';

interface ButtonProps {
  buttonTitle: string;
  visible: boolean;
}

export default function ButtonContinue({ buttonTitle }: ButtonProps) {
  return (
    <StyledContinueButton>
      {buttonTitle}
    </StyledContinueButton>
  )
}