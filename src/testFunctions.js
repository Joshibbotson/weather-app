export function kelvinToCelcius(temp) {
    return typeof temp === "number" ? Math.round(temp - 273.15) : 0
}

export function celciusToFahrenheitTest(temp) {
    let displayTemp
    let displayC
    let displayF
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return [
        (displayTemp = Math.round(intTemp * (9 / 5) + 32) + " °F"),
        (displayC = "flex"),
        (displayF = "none"),
    ]
}

export function fahrenheitToCelciusTest(temp) {
    let displayTemp
    let displayC
    let displayF
    let intTemp = String(temp).replace("°C", "")
    intTemp = parseInt(intTemp)
    return [
        (displayTemp = Math.round((intTemp - 32) * (5 / 9)) + " °C"),
        (displayC = "none"),
        (displayF = "flex"),
    ]
}
