import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  buttonTitle: string;
  destination: string;
}

export default function Button({ destination, buttonTitle }: ButtonProps) {
  const navigate = useNavigate()
  return (
    <button onClick={() => destination.includes('https://')
    ? window.open('https://compass.uol/pt/home', '_blank') 
    : navigate(`${destination}`) }>{buttonTitle}</button>
  )
}

// const EstiloBotao = styled.button`
//   color: blue;
// `;

// const Botao = styled(EstiloBotao)

// <EstiloBotao>
//   <Botao />
// </EstiloBotao>