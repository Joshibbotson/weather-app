const { get } = require("lodash")

const weather = document.getElementById("weather")

// async function getTemp() {
//     fetch(
//         "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3019f42598e2771e78de4788949e7fff",
//         {
//             mode: "cors",
//         }
//     )
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             weather.innerHTML = response.main.feels_like
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }
async function getLocation(city) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=3019f42598e2771e78de4788949e7fff`,
        { mode: "cors" }
    )
    response.json().then(function (response) {
        console.log(`lat=${response[0].lat}&lon=${response[0].lon}`)
        return `lat=${response[0].lat}&lon=${response[0].lon}`
    })
}

async function getTemp(latAndLon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${latAndLon}&appid=3019f42598e2771e78de4788949e7fff`,
        {
            mode: "cors",
        }
    )
    response.json().then(function (response) {
        console.log(response)
    })
}

getTemp(getLocation("Hull"))
