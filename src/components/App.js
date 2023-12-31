import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [temperatureColor, setTemperatureColor] = useState("");

  function showWeather(e) {
    e.preventDefault();

    // Convert temp to a number
    const temperature = parseFloat(temp);

    // Set the threshold
    const threshold = 20;

    // Determine the color based on the temperature
    const color = temperature > threshold ? "red" : "blue";
    setTemperatureColor(color);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={showWeather}>
        <label htmlFor="temp">Temperature: </label>
        <input
          type="number"
          placeholder="Enter the temperature here"
          id="temp"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <br />
        <label htmlFor="condition">Weather Conditions:</label>
        <input
          type="text"
          placeholder="Enter the weather condition here"
          id="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display weather information */}
      {temperatureColor && (
        <div style={{ marginTop: "20px" }}>
          <h2>Weather Information</h2>
          <p>Temperature: <span style={{ color: temperatureColor }}>{temp}°C</span></p>
          <p>Weather Conditions: {condition}</p>
        </div>
      )}
    </div>
  );
};

export default App;
