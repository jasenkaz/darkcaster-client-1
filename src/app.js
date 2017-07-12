const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/index');
//create our application
angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client') //getter
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
