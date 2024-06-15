document.getElementById("searchBtn").addEventListener("click", () => {
  const location = document.getElementById("location").value;
  fetch(`/api/weather?location=${location}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("locationName").innerText = data.name;
      document.getElementById("temperature").innerText = data.main.temp;
      document.getElementById(
        "dateTime"
      ).innerText = new Date().toLocaleString();
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
