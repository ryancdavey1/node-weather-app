console.log('Client side javascript file is loaded')

fetch('http://puzzle.mead.io/puzzle')
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json)
  })

fetch('http://localhost:3000/weather?address=boston')
  .then(response => {
    return response.json()
  })
  .then(json => {
    if (json.error) {
      console.log(json.error)
    } else {
      console.log(json.location)
      console.log(json.forecast)
    }
  })
