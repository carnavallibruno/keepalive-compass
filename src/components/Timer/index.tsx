import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RefreshContainer, RefreshPhrase, RefreshTimerContainer, RefreshTimer } from './styles';

export default function Timer() {
  const navigate = useNavigate();
  let [refreshTimer, setRefreshTimer] = useState(600);

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

        {refreshTimer == 0 ? navigate('/') : null}
      </>
    </RefreshContainer>
  )
}

// import React, { useEffect } from 'react';
// import { useState } from 'react'

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