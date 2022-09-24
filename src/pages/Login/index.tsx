import Button from '../../components/Button';
import InputUser from "./Input/InputUser";
import InputPassword from "./Input/InputPassword";
import { useState } from 'react';

export default function Login() {
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("");
  return (
    <>
      <h2>Olá</h2>
      <p>Para continuar navegando de forma segura, efetue o login na rede</p>
      <h4>Login</h4>
      <InputUser
        type="text"
        placeholder="Usuário"
        user={user}
        setUser={setUser}
      />
      
      <InputPassword
        type="password"
        placeholder="Senha"
        password={password}
        setPassword={setPassword}
      />
      
      <Button 
        buttonTitle='Continuar'
        destination={"/home"}
      />
    </>
  )
}