const clearDay = require('../../images/clear-day.png');

MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };
  //functions
  this.search = function search(){
    console.log('searching....');
    console.log(this.lat);
    console.log(this.lon);
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather); //is a promise
  };

}
module.exports = MainController;
