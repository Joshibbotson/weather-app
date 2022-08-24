import {
    kelvinToCelcius,
    celciusToFahrenheit,
    fahrenheitToCelcius,
} from "./temperatureMeasurements"

import format from "date-fns/format"

export const DOM = {
    clouds: document.querySelector(".clouds"),
    city: document.querySelector(".city"),
    date: document.querySelector(".date"),
    time: document.querySelector(".time"),
    temp: document.querySelector(".main-temp"),
    weatherImg: document.querySelector(".main-img"),
    displayF: document.querySelector(".change-temp-type-F"),
    displayC: document.querySelector(".change-temp-type-C"),
}

DOM.displayF.addEventListener("click", () => {
    return celciusToFahrenheit(DOM.temp.innerHTML)
})
DOM.displayC.addEventListener("click", () => {
    return fahrenheitToCelcius(DOM.temp.innerHTML)
})

let locationData

getLocation("china")

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
        .catch(function () {
            console.log("failed to get data")
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
        if (weather.includes("clouds") === true) {
            DOM.weatherImg.outerHTML = `<img
            class="main-img"
            src="./images/weather pngs/clouds.png"
            alt="clouds"
        />`
        }
        if (weather.includes("rain") === true) {
            DOM.weatherImg.outerHTML = `<img
            class="main-img"
            src="./images/weather pngs/rain.png"
            alt="rain"
        />`
        }
        if (weather.includes("sun") === true) {
            DOM.weatherImg.outerHTML = `<img
            class="main-img"
            src="./images/weather pngs/sun.png"
            alt="sun"
        />`
        }
        if (weather.includes("snow") === true) {
            DOM.weatherImg.outerHTML = `<img
            class="main-img"
            src="./images/weather pngs/snow.png"
            alt="sun"
        />`
        }
        if (weather.includes("partly") === true) {
            DOM.weatherImg.outerHTML = `<img
            class="main-img"
            src="./images/weather pngs/partly cloudy.png"
            alt="sun"
        />`
        }
        if (weather.includes("thunderstorm") === true) {
            DOM.weatherImg.outerHTML = `<img
            class="main-img"
            src="./images/weather pngs/thunderstorm.png"
            alt="sun"
        />`
        }
    }
}
