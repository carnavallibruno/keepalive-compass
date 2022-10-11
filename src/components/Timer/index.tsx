import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RefreshContainer, RefreshPhrase, RefreshTimerContainer, RefreshTimer } from './styles';

export default function Timer() {
  const logOut = () => {
    signOut(auth)
    navigate('/')
    sessionStorage.clear()
  }

  const navigate = useNavigate();
  let [refreshTimer, setRefreshTimer] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setRefreshTimer(refreshTimer -= 1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [refreshTimer])

  return (
    <RefreshContainer>
      <>
        <RefreshPhrase>Application refresh in</RefreshPhrase>

        <RefreshTimerContainer>
          <RefreshTimer>{refreshTimer < 10 ? `0${refreshTimer}` : refreshTimer}</RefreshTimer>
          <p>seconds</p>
        </RefreshTimerContainer>

        {refreshTimer == 0 ? logOut() : null}
      </>
    </RefreshContainer>
  )
}

// import React, { useEffect } from 'react';
// import { useState } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';

// export const useTimer = () => {
//   let [refreshTimer, setRefreshTimer] = useState(60);

//   useEffect(() => {
//     const timer = setTimeout(() => setRefreshTimer(refreshTimer -= 1), 1000);
//   }, [refreshTimer])

//   return (
//     <span>
//       {refreshTimer}
//     </span>
//   )
// }