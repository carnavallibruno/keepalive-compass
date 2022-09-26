import { StyledContinueButton } from './style';

interface ButtonProps {
  buttonTitle: string;
}

export default function ButtonContinue({ buttonTitle}: ButtonProps) {
  return (
    <StyledContinueButton>{buttonTitle}
    </StyledContinueButton>
  )
}