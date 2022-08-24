import {
    kelvinToCelcius,
    celciusToFahrenheit,
    fahrenheitToCelcius,
} from "./temperatureMeasurements"

export const DOM = {
    clouds: document.querySelector(".clouds"),
    city: document.querySelector(".city"),
    date: document.querySelector(".date"),
    time: document.querySelector(".time"),
    temp: document.querySelector(".main-temp"),
    displayF: document.querySelector(".change-temp-type-F"),
    displayC: document.querySelector(".change-temp-type-C"),
}

DOM.displayF.addEventListener("click", () => {
    return celciusToFahrenheit(DOM.temp.innerHTML)
})
DOM.displayC.addEventListener("click", () => {
    return fahrenheitToCelcius(DOM.temp.innerHTML)
})

async function getLocation(city) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=3019f42598e2771e78de4788949e7fff`,
        { mode: "cors" }
    )
    response
        .json()
        .then(function (response) {
            return getTemp(`lat=${response[0].lat}&lon=${response[0].lon}`)
        })
        .catch(function () {
            console.log("failure")
        })
}

async function getTemp(latAndLon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${latAndLon}&appid=3019f42598e2771e78de4788949e7fff`,
        {
            mode: "cors",
        }
    )
    response
        .json()
        .then(function (response) {
            console.log(response)
            DOM.temp.innerHTML = kelvinToCelcius(response.main.temp) + " °C"
        })
        .catch(function () {
            console.log("failure in gettemp")
        })
}

getLocation("tokyo")
