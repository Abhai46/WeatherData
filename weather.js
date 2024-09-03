const getWeatherDetails = (location = "Kakkanad") => {
    const apiKey = "8ac5c4d57ba6a4b3dfcf622700447b1e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            return response.json();
        })
        .then(weather => {
            console.log(weather);

            const result = document.getElementById("result");
            result.innerHTML = `
                <div class="card text-center shadow-0 border rounded-5 bg-primary-subtle" style="width: 100%;">
                    <div class="card-body p-4">
                        <h4 class="card-title mb-3">${weather.name}</h4>
                        <p class="card-text mb-2">Current temperature: <strong>${weather.main.temp}°C</strong></p>
                        <p class="card-text">Feels like: <strong>${weather.main.feels_like}°C</strong></p>
                        <p class="card-text">Max: <strong>${weather.main.temp_max}°C</strong>, Min: <strong>${weather.main.temp_min}°C</strong></p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error(error.message);
            alert("Unable to fetch weather data. Please check the location and try again.");
        });
}

document.getElementById("searchButton").addEventListener("click", () => {
    const location = document.getElementById("locationInput").value || "Kakkanad";
    getWeatherDetails(location);
});

// Fetch and display Kakkanad weather data on page load
window.onload = () => {
    getWeatherDetails();
}