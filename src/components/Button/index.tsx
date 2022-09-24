import { useNavigate } from 'react-router-dom';

export default function Button() {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/home')}>Opa</button>
  )
}