const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPEN_WEATHER_API_KEY;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/weather", async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: "Location is required" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
