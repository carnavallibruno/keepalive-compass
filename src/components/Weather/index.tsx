import { useEffect, useState } from 'react';
import Cloud from '../../assets/weather-cloud.svg'

import { WeatherContainer, City, WeatherAndTemperature, Temperature, CloudIcon } from './styles';

export function Weather() {
  const [latitude, setLatitude] = useState(-23.533773);
  const [longitude, setLongitude] = useState(-46.625290);
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  function getLocation() {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      } catch (error) {
        console.log("deu errado", error);
      }
    }
  }

  useEffect(() => {
    getLocation();
    function getWeather() {
      try {
        fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=c58d9f47&lat=${latitude}&lon=${longitude}&user_ip=remote`)
          .then(event => event.json())
          .then(res => {
            const arrayCityAndState = (res.results.city.split(', '));
            const cityName = arrayCityAndState[0];
            const stateName = arrayCityAndState[1];
            const temp = res.results.temp;

            setCity(cityName)
            setProvince(stateName)
            setTemperature(temp)
          })
      } catch (error) {
        console.log(error)
      }
    }
    getWeather();
  }, [latitude, longitude, city, province]);

  return (
    <WeatherContainer>
      <City>{city} - {province}</City>

      <WeatherAndTemperature>

        <CloudIcon src={Cloud}></CloudIcon>
        <Temperature>{temperature}º</Temperature>

      </WeatherAndTemperature>
    </WeatherContainer>
  );
}