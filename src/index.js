import {
    kelvinToCelcius,
    celciusToFahrenheit,
    fahrenheitToCelcius,
} from "./temperatureMeasurements"

export const DOM = {
    clouds: document.querySelector(".clouds"),
    city: document.querySelector(".city"),
    temp: document.querySelector(".main-temp"),
    weatherImg: document.querySelector(".weather-img"),
    displayF: document.querySelector(".change-temp-type-F"),
    displayC: document.querySelector(".change-temp-type-C"),
    searchInput: document.getElementById("search"),
    searchBtn: document.querySelector(".magnifiying-glass"),
}

DOM.displayF.addEventListener("click", () => {
    return celciusToFahrenheit(DOM.temp.innerHTML)
})
DOM.displayC.addEventListener("click", () => {
    return fahrenheitToCelcius(DOM.temp.innerHTML)
})
DOM.searchBtn.addEventListener("click", () => {
    return getLocation(DOM.searchInput.value)
})
document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        return getLocation(DOM.searchInput.value)
    }
})

let locationData
getLocation("Harrogate")
randomBackground()

function randomBackground() {
    const i = Math.floor(Math.random() * 2)

    if (i === 0) {
        document.body.style.background =
            "url(../src/images/asian.jpeg) no-repeat center center fixed"
    }
    if (i === 1) {
        document.body.style.background =
            "url(../src/images/sunset.jpeg) no-repeat center center fixed"
    }
}

async function getLocation(city) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=3019f42598e2771e78de4788949e7fff`,
        { mode: "cors" }
    )
    response
        .json()
        .then(function (response) {
            return getData(`lat=${response[0].lat}&lon=${response[0].lon}`)
        })
        .catch(function () {
            console.log("failure")
        })
}

async function getData(latAndLon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${latAndLon}&appid=3019f42598e2771e78de4788949e7fff`,
        {
            mode: "cors",
        }
    )
    response
        .json()
        .then(function (response) {
            return (locationData = response), console.log(response), updateUI()
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function updateUI() {
    DOM.temp.innerHTML = kelvinToCelcius(locationData.main.temp) + " °C"
    DOM.clouds.innerHTML =
        locationData.weather[0].description.charAt(0).toUpperCase() +
        locationData.weather[0].description.slice(1)
    DOM.city.innerHTML = locationData.name

    weatherImg(locationData.weather[0].description)

    function weatherImg(weather) {
        if (weather.includes("clouds")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/clouds.png"
            alt="clouds"
        />`
        }
        if (weather.includes("rain") || weather.includes("drizzle")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/rain.png"
            alt="rain"
        />`
        }
        if (weather.includes("sun")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/sun.png"
            alt="sun"
        />`
        }
        if (weather.includes("snow")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/snow.png"
            alt="sun"
        />`
        }
        if (weather.includes("partly")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/partly cloudy.png"
            alt="sun"
        />`
        }
        if (weather.includes("thunderstorm")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/thunderstorm.png"
            alt="sun"
        />`
        }
        if (weather.includes("mist")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/mist.png"
            alt="sun"
        />`
        }
        if (weather.includes("clear")) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="../src/images/weatherpngs/clearSky.png"
            alt="sun"
        />`
        }
    }
}
