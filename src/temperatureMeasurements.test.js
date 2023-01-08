import {
    kelvinToCelcius,
    celciusToFahrenheitTest,
    fahrenheitToCelciusTest,
} from "./testFunctions"

describe("kelvinToCelcius", () => {
    it("should convert temperature from Kelvin to Celsius", () => {
        expect(kelvinToCelcius(300)).toEqual(27)
        expect(kelvinToCelcius(273.15)).toEqual(0)
        expect(kelvinToCelcius(373.15)).toEqual(100)
    })
    it("should return 0 if a non-number value is passed", () => {
        expect(kelvinToCelcius("300")).toEqual(0)
        expect(kelvinToCelcius([300])).toEqual(0)
        expect(kelvinToCelcius({ temp: 300 })).toEqual(0)
        expect(kelvinToCelcius()).toEqual(0)
    })
})

describe("celciusToFahrenheitTest", () => {
    it("should convert temperature from Celsius to Fahrenheit", () => {
        expect(celciusToFahrenheitTest("20°C")).toEqual([
            "68 °F",
            "flex",
            "none",
        ])
        expect(celciusToFahrenheitTest("0°C")).toEqual([
            "32 °F",
            "flex",
            "none",
        ])
        expect(celciusToFahrenheitTest("10°C")).toEqual([
            "50 °F",
            "flex",
            "none",
        ])
    })
})

describe("fahrenheitToCelciusTest", () => {
    it("should convert temperature from Fahrenheit to Celsius", () => {
        expect(fahrenheitToCelciusTest("70°F")).toEqual([
            "21 °C",
            "none",
            "flex",
        ])
        expect(fahrenheitToCelciusTest("32°F")).toEqual([
            "0 °C",
            "none",
            "flex",
        ])
        expect(fahrenheitToCelciusTest("50°F")).toEqual([
            "10 °C",
            "none",
            "flex",
        ])
    })
})
