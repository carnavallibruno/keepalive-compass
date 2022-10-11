import Login from '../src/pages/Login'
import Home from '../src/pages/Home'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Registration from '../src/pages/Registration';
import { UserRegisterProvider } from '../src/contexts/UserRegisterContext';
import { UserLoginProvider } from '../src/contexts/UserLoginContext';
import { auth } from './../src/services/firebaseConfig';

export default function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLoginProvider><Login /></UserLoginProvider>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<UserRegisterProvider><Registration /></UserRegisterProvider>} />
      </Routes>
    </BrowserRouter>
  )
}