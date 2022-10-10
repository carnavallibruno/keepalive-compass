import { createContext, ReactNode, useState } from "react";

interface UserRegisterContextProps {
  children: ReactNode;
};

interface UserRegisterContextType {
  name: string;
  setName: (newState: string) => void;

  email: string;
  setEmail: (newState: string) => void;

  password: string;
  setPassword: (newState: string) => void;

  repeatPassword: string;
  setRepeatPassword: (newState: string) => void;
}

const initialValue = {
  name: '',
  setName: () => {},

  email: '',
  setEmail: () => {},

  password: '',
  setPassword: () => {},

  repeatPassword: '',
  setRepeatPassword: () => {},
}

export const UserRegisterContext = createContext<UserRegisterContextType>(initialValue);
UserRegisterContext.displayName = 'User Login Context'

export const UserRegisterProvider = ({ children }: UserRegisterContextProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <UserRegisterContext.Provider value={{ name, setName, email, setEmail, password, setPassword, repeatPassword, setRepeatPassword }}>
      {children}
    </UserRegisterContext.Provider>
  )
}