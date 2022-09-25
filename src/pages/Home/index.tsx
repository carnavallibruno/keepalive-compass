import Weather from './Weather';
import { useDate } from './Date/index';
import { useTimer } from './Timer/index';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function Home() {
  const { date, time } = useDate()
  const { refreshTimer } = useTimer()
  const navigate = useNavigate()
  

  return (
    <>
    <nav>
      <img src="" alt="Logo Compasso" />
      <div>
        <div>
          {time}
        </div>
        
        <div>
          {date}
        </div>
      </div>

      <div>
        <Weather />
      </div>
    </nav>

    <div>
      <img src="" alt="Logo UOL" />
    </div>

    <div>
      <h3>Our mission is</h3>
      <p>Nossa missão é</p>
      <h3>to transform the world</h3>
      <p>transformar o mundo</p>
      <h3>building digital experiences</h3>
      <p>construindo experiências digitais</p>
      <h3>that enable our client's growth</h3>
      <p>que permitam o crescimento dos nossos clientes</p>
    </div>

    <footer>
      <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
      <p>|</p>

      <div>
        <>
          <p>Application refresh in</p>
          {refreshTimer}
          {refreshTimer == 0 ? navigate('/') : null}
        </>
      </div>

      <Button
        buttonTitle='Continuar Navegando'
        destination='https://compass.uol/pt/home' 
      />

      <Button 
        buttonTitle='Logout'
        destination='/'
      />

    </footer>
    </>
  )
}