const input = document.querySelector(".input")
const searchImg = document.querySelector(".search-img")
const WeatherIcon = document.querySelector(".Weather-icon")
const error = document.querySelector(".error")

const weather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bba17a072d2127459491390ad0f73f88&units=metric`)

        .then((res) => {
            if (res.status === 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".Weather").style.display = "none";
                throw new Error('City not found');
            }
            return res.json();
        })

        .then((res) => {
            document.querySelector(".error").style.display = "none"
            document.querySelector(".Weather").style.display = "block"

            document.querySelector(".city").innerHTML = `${res.name}`
            document.querySelector(".temp").innerHTML = Math.round(res.main.temp) + `°c`
            document.querySelector(".sys").innerHTML = `${res.sys.country}`
            document.querySelector(".humidity").innerHTML = `${res.main.humidity}%`
            document.querySelector(".wind").innerHTML = `${res.wind.speed} km/h`

            if (res.weather[0].main === "Clouds") {
                WeatherIcon.src = "images/clouds.png"
            }
            else if (res.weather[0].main == "Clear") {
                WeatherIcon.src = "images/clear.png"
            }
            else if (res.weather[0].main == "Drizzle") {
                WeatherIcon.src = "images/drizzle.png"
            }
            else if (res.weather[0].main == "Mist") {
                WeatherIcon.src = "images/mist.png"
            }
            else if (res.weather[0].main == "Rain") {
                WeatherIcon.src = "images/rain.png"
            }
            else if (res.weather[0].main == "Snow") {
                WeatherIcon.src = "images/snow.png"
            }
        })

        .catch((error) => {
            console.error(error);
        });

}

searchImg.addEventListener("click", () => {
    const city = input.value.trim();
    if (city) {
        weather(city);
    } else {
        alert('Please enter a city name');
    }
    input.value = ""
})

function btn() {
    document.querySelector(".error").style.display = "none"
} 