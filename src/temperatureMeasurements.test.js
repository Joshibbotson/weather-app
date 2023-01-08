import {
    kelvinToCelcius,
    celciusToFahrenheit1,
    fahrenheitToCelcius1,
} from "./temperatureMeasurements"
const jsdom = require("jsdom")

describe("temperatureMeasurements.js", function () {
    test("convert kelvin to celcius", function () {
        expect(kelvinToCelcius(243)).toBe(-30.15)
    })
})
describe("celciusToFahrenheit1", () => {
    it("should convert a temperature from celcius to fahrenheit", () => {
        expect(celciusToFahrenheit(0)).toEqual("32 °F")
    })
})

describe("fahrenheitToCelcius1", () => {
    it("should convert a temperature from fahrenheit to celcius", () => {
        expect(fahrenheitToCelcius(32)).toEqual(0)
    })
})
