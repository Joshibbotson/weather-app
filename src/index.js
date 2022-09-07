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

getLocation("Harrogate")
let locationData
randomBackground()

function randomBackground() {
    const i = Math.floor(Math.random() * 2)

    if (i === 0) {
        document.body.style.background =
            "url(./images/asian.jpeg) no-repeat center center fixed"
    }
    if (i === 1) {
        document.body.style.background =
            "url(./images/sunset.jpeg) no-repeat center center fixed"
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
    console.log("UI")
    DOM.temp.innerHTML = kelvinToCelcius(locationData.main.temp) + " °C"
    DOM.clouds.innerHTML =
        locationData.weather[0].description.charAt(0).toUpperCase() +
        locationData.weather[0].description.slice(1)
    DOM.city.innerHTML = locationData.name

    weatherImg(locationData.weather[0].description)
    1
    function weatherImg(weather) {
        console.log("weatherImg")
        if (weather.includes("clouds") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/clouds.png"
            alt="clouds"
        />`
            console.log("helo")
        }
        if (weather.includes("rain") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/rain.png"
            alt="rain"
        />`
            console.log("rain")
        }
        if (weather.includes("sun") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/sun.png"
            alt="sun"
        />`
        }
        if (weather.includes("snow") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/snow.png"
            alt="sun"
        />`
        }
        if (weather.includes("partly") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/partly cloudy.png"
            alt="sun"
        />`
        }
        if (weather.includes("thunderstorm") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/thunderstorm.png"
            alt="sun"
        />`
        }
        if (weather.includes("mist") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/mist.png"
            alt="sun"
        />`
        }
        if (weather.includes("clear") === true) {
            DOM.weatherImg.innerHTML = `<img
            class="main-img"
            src="./images/weather pngs/clearSky.png"
            alt="sun"
        />`
        }
    }
}
