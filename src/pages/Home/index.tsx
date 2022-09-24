import Weather from './Weather';
import { useDate } from './Date/index';

export default function Home() {
  const { date, time } = useDate()
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
    </>
  )
}