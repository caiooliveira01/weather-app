// ---- Date -----

let weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

let now = new Date()
let date = now.getDate()
let weekday = weekdays[now.getDay()]
let month = months[now.getMonth()]
let year = now.getFullYear()

if (date < 10) date = `0${date}`

document.querySelector(".weekday").innerHTML = weekday
document.querySelector(".date").innerHTML = `${date} ${month} ${year}`

// ---------------

const key = '20d359cf9d0c7b31508a5b7a68f881e9'

async function searchCity(city) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then( response => response.json() )

  showData(data)
}

function clickBtn() {
  const city = document.querySelector(".input-city").value

  searchCity(city)
}

function showData(data) {
  document.querySelector(".city").innerHTML = `${data.name}, ${data.sys.country}`

  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

  document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)} °C`

  document.querySelector(".desc").innerHTML = `${data.weather[0].description}`

  document.querySelector(".max").innerHTML = `${Math.floor(data.main.temp_max)}°C`

  document.querySelector(".min").innerHTML = `${Math.floor(data.main.temp_min)}°C`

  document.querySelector(".feel").innerHTML = `${Math.floor(data.main.feels_like)}°C`

  document.querySelector(".humi").innerHTML = `${data.main.humidity}%`

  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
}