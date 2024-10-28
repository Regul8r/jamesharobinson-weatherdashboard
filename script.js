document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    
    // API URL with city and API key
    const apiKey = "YOUR_API_KEY"; // Replace YOUR_API_KEY with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            // Update HTML with fetched data
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            alert("Could not retrieve weather data. Please try again.");
            console.error(error);
        });
});
