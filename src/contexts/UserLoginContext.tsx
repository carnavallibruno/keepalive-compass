import { createContext, ReactNode, useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { update, ref } from 'firebase/database';
import { database } from "../services/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { auth } from './../services/firebaseConfig';

interface UserLoginContextProps {
  children: ReactNode;
};

interface UserLoginContextType {
  username: string;
  setUsername: (newState: string) => void;
  password: string;
  setPassword: (newState: string) => void;
}

const initialValue = {
  username: '',
  setUsername: () => { },
  password: '',
  setPassword: () => { },
}

export const UserLoginContext = createContext<UserLoginContextType>(initialValue);
UserLoginContext.displayName = 'User Login Context'

export const UserLoginProvider = ({ children }: UserLoginContextProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()


  return (
    <UserLoginContext.Provider value={{ username, setUsername, password, setPassword }}>
      {children}
    </UserLoginContext.Provider>
  )
}