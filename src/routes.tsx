import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration';
import { UserRegisterProvider } from './contexts/UserRegisterContext';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<UserRegisterProvider><Registration /></UserRegisterProvider>} />
      </Routes>
    </BrowserRouter>
  )
}