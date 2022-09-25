import React, { useState, useEffect } from "react";

export const useDate = () => {
  const locale = 'pt';
  const [ today, setDate ] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])
  
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' })

  const weekDay = today.toLocaleDateString(locale, { weekday: 'long'})
  const date = `${weekDay}, ${today.getDate()} de ${today.toLocaleDateString(locale, { month: 'long'})} de ${today.getFullYear()}`


  return {
    time, date
  }
}