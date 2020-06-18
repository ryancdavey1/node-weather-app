const request = require('postman-request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidXNlcnJkIiwiYSI6ImNrYjZ2Z3JhNTAya3oydm94bHN4dnFuOGEifQ.hjguZ6_1csO7O_15BJI_9A&limit=1';

  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.features.length == 0) {
      callback('Unable to find location. Please try another search.', undefined);    
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;