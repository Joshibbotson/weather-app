import { DOM } from "."

export function kelvinToCelcius(temp) {
    return Math.round(temp - 273.15)
}

export function celciusToFahrenheit(temp) {
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return (
        (DOM.temp.innerHTML = Math.round(intTemp * (9 / 5) + 32) + " °F"),
        (DOM.displayC.style.display = "flex"),
        (DOM.displayF.style.display = "none")
    )
}

export function celciusToFahrenheit1(temp) {
    let displayTemp
    let displayC
    let displayF
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return (
        (displayTemp = Math.round(intTemp * (9 / 5) + 32) + " °F"),
        (displayC = "flex"),
        (displayF = "none")
    )
}

export function fahrenheitToCelcius(temp) {
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return (
        (DOM.temp.innerHTML = Math.round((intTemp - 32) * (5 / 9)) + " °C"),
        (DOM.displayC.style.display = "none"),
        (DOM.displayF.style.display = "flex")
    )
}

export function fahrenheitToCelcius1(temp) {
    let displayTemp
    let displayC
    let displayF
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return (
        (displayTemp = Math.round((intTemp - 32) * (5 / 9)) + " °C"),
        (displayC = "none"),
        (displayF = "flex")
    )
}
