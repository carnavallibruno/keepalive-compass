import { useEffect, useState } from 'react';
import Cloud from '../../assets/weather-cloud.svg'

import { WeatherContainer, City, WeatherAndTemperature, Temperature, CloudIcon } from './styles';

export function Weather() {
  const [latitude, setLatitude] = useState(-15.7801);
  const [longitude, setLongitude] = useState( -47.9292);
  const [temperature, setTemperature] = useState(0);
  const [local, setLocal] = useState("")
  const [province, setProvince] = useState("")

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
    async function getWeather() {
      try {
        const apiCityTemperature = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=95c4c99887881db2f5237d13c18a994b&units=metric`);
        const cityData = await apiCityTemperature.json();
        setLocal(cityData.name);
        setTemperature(cityData.main.temp.toFixed(0));

        const apiState = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${local}`)
        const stateData = await apiState.json();
        setProvince(stateData.nome);
      } catch (error) {
        console.log(error)
      }
    }
    getWeather();
  }, [latitude, longitude, province]);

  return (
    <WeatherContainer>
       <City>{local} - {local === 'Brasília' ? 'DF' : 'SC'}</City> {/* {province} */}

      <WeatherAndTemperature>
        <CloudIcon src={Cloud}></CloudIcon>
        <Temperature>{temperature}º</Temperature>
      </WeatherAndTemperature>

    </WeatherContainer>
  );

}