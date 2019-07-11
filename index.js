require('dotenv').config();
const request = require('request-promise');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
var getWeather = require('./fetchWeather.js')


const port = process.env.PORT;
// console.log(process.env.API_KEY);
 
app.use(bodyParser.json());


app.get('/',async(req,res)=> {
          console.log("on get/")
          //getting  the cities out of the body 
          let city = req.body.city;
          console.log(city);
          let weather = await getWeather.fetchWeather(city)
          console.log(weather);
          res.send(weather);
}),
//api call to get weather information
app.post('/', async (req, res) => {
    console.log("on post/")
    //getting  the cities out of the body 
    let cityt = req.body.cities;
        //for loop cities
        // Get city weather
        // Push weather to temperatures array
        // Get max temperature
        //var cityArrayPromises = [];
        var storeWeather = [];
        var storeTemp = [];
        for (var i=0; i < cityt.length; i++) {
            if (cityt.length <2){
                return(err);
                console.log("We need at least two cities");
            }
            else {
                let city = cityt[i];
           let weather = await getWeather.fetchWeather(city);
            storeWeather.push(weather);
            storeTemp.push(weather.main.temp)
            }
        }
        var max = storeTemp.indexOf(Math.max.apply(Math, storeTemp));
        //var maxTemp = Math.max.apply(Math, storeTemp)
        // res.send( gWeather[max].name + " is "  + maxTemp + " degrees ");
        res.send( storeWeather[max]);
}),






app.listen(port, function () {
    //console.log('Example app listening on port 8055!')
    console.log(`Your port is ${port}`); // 8055
  });







                