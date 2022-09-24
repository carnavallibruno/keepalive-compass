import React, { useEffect } from 'react';
import { useState } from 'react'

export const useTimer = () => {
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
      {refreshTimer}
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