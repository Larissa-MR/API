let request = require('request');

let apiKey = '33760c31c79e2af49b93346d906e1e0b';
let city = 'berlin';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
