import { useEffect, useState } from 'react';
import Cloud from '../../assets/weather-cloud.svg'

import { WeatherContainer, City, WeatherAndTemperature, Temperature, CloudIcon } from './styles';

export function Weather() {
  const [latitude, setLatitude] = useState(-15.7801);
  const [longitude, setLongitude] = useState(-47.9292);
  const [temperature, setTemperature] = useState(0);
  const [local, setLocal] = useState("")
  const [province, setProvince] = useState("")
  const [country, setCountry] = useState("")

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
        fetch(`//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=95c4c99887881db2f5237d13c18a994b&units=metric`)
          .then(event => event.json())
          .then(res => { setLocal(res.name), setTemperature(res.main.temp), setCountry(res.sys.country) })

        // fetch(`//servicodados.ibge.gov.br/api/v1/localidades/municipios/florianopolis}`)
        //   .then(event => event.json())
        //   .then(res => console.log(res))
      } catch (error) {
        console.log(error)
      }
    }
    getWeather();
  }, [latitude, longitude, local, province]);

  return (
    <WeatherContainer>
      <City>{local} - {country}</City>

      <WeatherAndTemperature>
        <CloudIcon src={Cloud}></CloudIcon>
        <Temperature>{temperature.toFixed(0)}º</Temperature>
      </WeatherAndTemperature>

    </WeatherContainer>
  );

}