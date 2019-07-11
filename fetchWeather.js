const request = require('request-promise');
require('dotenv').config();
var rp = require('request-promise');
  


//TODO
// two endpoint one for max weather and  the input is an array with the cities if it is just one city in the array i have to return that we need at least two cities
// returning json not string
// --> making the code more reusable 
// first endpoint is just for one city  (to be a GET)
// second one with an array is a POST
const apiKey =  process.env.API_KEY;

  function fetchWeather(city){
    return new Promise((resolve, reject) => {
      // Request for weather
      // Return weather data
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`  
      rp (url)
                .then(function(fWeather){
                    console.log("everything is working fine");
                    let weather = JSON.parse(fWeather);
                    resolve(weather);
                    })
                .catch(function(err){
                  console.log(err);
                  reject(err);
                  
                });
    
    })
  
}

  
module.exports = {fetchWeather};