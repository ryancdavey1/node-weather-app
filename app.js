const request = require('postman-request');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=6070727b10470ab400ec81a3360c6c28&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
//   }
// });

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXNlcnJkIiwiYSI6ImNrYjZ2Z3JhNTAya3oydm94bHN4dnFuOGEifQ.hjguZ6_1csO7O_15BJI_9A&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location services!')
//   } else if (response.body.features.length == 0) {
//     console.log('Unable to find location. Please try another search.')
//   } else {
//     console.log(`Latitude: ${response.body.features[0].center[1]}`);
//     console.log(`Longitude: ${response.body.features[0].center[0]}`);
//   }
  
// });

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data)
});