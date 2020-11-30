console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const locationMessage = document.querySelector("#location-message")
const forecastMessage = document.querySelector("#forecast-message")

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault() 

  const location = search.value
  locationMessage.textContent = "Loading..."
  forecastMessage.textContent = ""

  fetch(`http://localhost:3000/weather?address=${location}`)
  .then(response => {
    return response.json()
  })
  .then(json => {
    if (json.error) {
      locationMessage.textContent = json.error 
    } else {
      locationMessage.textContent = json.location
      forecastMessage.textContent = json.forecast
    }
  })
})


