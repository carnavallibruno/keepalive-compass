import { ContainerHome } from './styles';

import Navbar from './Navbar/index';
import { Main } from './Main/index';
import Mission from './Mission';
import Footer from './Footer/index';
import { auth } from './../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
  return (
    <ContainerHome>
      <Navbar />
      
      <Main>
        <Mission />
      </Main>

      <Footer />

    </ContainerHome>
  )
}