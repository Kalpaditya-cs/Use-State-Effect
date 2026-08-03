import { useEffect, useState } from "react";

export default function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

  async function fetchWeather(searchCity) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=YOUR_API_KEY&units=metric`
      );

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => fetchWeather(city)}>Search</button>

  
    </div>
  );
}