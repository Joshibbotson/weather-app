import { DOM } from "."

export function kelvinToCelcius(temp) {
    return typeof temp === "number" ? Math.round(temp - 273.15) : 0
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

export function fahrenheitToCelcius(temp) {
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return (
        (DOM.temp.innerHTML = Math.round((intTemp - 32) * (5 / 9)) + " °C"),
        (DOM.displayC.style.display = "none"),
        (DOM.displayF.style.display = "flex")
    )
}
