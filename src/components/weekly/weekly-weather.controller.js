const clearDay = require('../../images/clear-day.png');

WeeklyWeatherController.$inject = ['WeatherService']; //magic for us

function WeeklyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay
  };
  //functions
  this.search = function search(){
    weather.getWeeklyWeather(this.lat, this.lon)
           .then(weeklyWeather => this.weatherData = weeklyWeather); //is a promise
  };

}
module.exports = WeeklyWeatherController;
