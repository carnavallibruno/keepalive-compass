import React from "react";

export const useDate = () => {
  const locale = 'pt';
  const [ today, setDate ] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const time = today.toLocaleTimeString()

  const day = today.toLocaleDateString(locale, { weekday: 'long'})
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long'})}\n\n`


  return {
    time, date
  }
}