import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app, auth, database } from './../services/firebaseConfig';
import { UserLoginContext } from './UserLoginContext';
import { update, ref } from 'firebase/database';

interface LoggedUserProps {
  children: ReactNode;
}

const { username, password } = useContext(UserLoginContext)

export const LoggedUserContext = createContext({} as any);

export const LoggedUserProvider = ({ children }: LoggedUserProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null as any);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUsername = sessionStorage.getItem("@AuthFirebase:username");
      if (storageUsername) {
        setUser(storageUsername);
      }
    };
    loadStorageData();
  });

  function signIn() {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // ? Signed in
        const user = userCredential.user;
        update(ref(database, 'users/' + user.uid), {
          lastLogin: new Date(),
        })

        sessionStorage.setItem("AuthFirebase:username", username)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setVisible(true)
      });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return navigate('/');
  }

  return (
    <LoggedUserContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </LoggedUserContext.Provider>
  )
}
