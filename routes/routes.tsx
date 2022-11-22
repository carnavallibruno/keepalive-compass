import Login from '../src/pages/Login'
import Home from '../src/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from '../src/pages/Registration';

export default function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}