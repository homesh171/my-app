import { useState } from 'react'

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const API_KEY = '9de5708aa31136cbeb4d9016cfa9d758'

  const getWeather = async () => {
    if (city === '') return
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      const data = await response.json()
      if (data.cod !== 200) {
        setError('City not found!')
        setWeather(null)
      } else {
        setWeather(data)
        setError('')
      }
    } catch {
      setError('Something went wrong!')
    }
  }

  return (
    <div className="weather">
      <h2>Weather App 🌤️</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>

      {error && <p style={{color: 'red'}}>{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>🌡️ Temp: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌤️ {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default Weather