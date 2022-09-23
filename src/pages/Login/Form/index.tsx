import Input from "../Input"
import { useState } from 'react';

export default function Form() {

  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("");

  return(
    <>
    <Input 
        type="text"
        placeholder="Usuário"
        />

    <Input 
      type="password"
      placeholder="Senha"
      />
    </>
  )
}