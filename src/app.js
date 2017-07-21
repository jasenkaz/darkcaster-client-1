const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/index');
const WeeklyWeatherComponent = require('./components/weekly-weather/index');
//create our application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
       .component('weeklyWeather', WeeklyWeatherComponent); 
