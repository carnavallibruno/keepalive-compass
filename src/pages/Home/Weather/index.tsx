import axios from 'axios';
import { useState } from 'react';

export default function Weather() {  
  const [ data, setData ] = useState({name: "", main: "", temp: 0});
  const [ location, setLocation ] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=95c4c99887881db2f5237d13c18a994b`

  const searchLocation = ((event: any) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  )
  return (
    <>
      <div>
        <div className="search">
          <input
            value={location}
            onChange={(event) => {
              {searchLocation}
              setLocation(event.target.value)
            }}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        <div className="container">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null}
            </div>
        </div>
      </div>
    </>
  )
}