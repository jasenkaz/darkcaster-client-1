

WeeklyWeatherController.$inject = ['WeatherService', 'images']; //magic for us

function WeeklyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;
  //functions
  this.search = search;
  function search(){
    weather.getWeeklyWeather(this.lat, this.lon)
           .then(weeklyWeather => this.weeklyWeather = weeklyWeather); //is a promise
  };

}
module.exports = WeeklyWeatherController;
