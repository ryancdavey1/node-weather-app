const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=6070727b10470ab400ec81a3360c6c28&query=' + latitude + ',' + longitude + '&units=f'

  request({ url, json: true}, (error, {body}) => {
  
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      console.log(body.current);
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. 
      The humidity is ${body.current.humidity}%.`)
    }
  });
};

module.exports = forecast;