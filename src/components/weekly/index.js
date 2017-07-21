const htmlTemplate = require('./weekly-weather.html');
const weeklyController = require('./weekly-weather.controller');

const WeeklyWeatherComponent = {
  template: htmlTemplate,
  controller: weeklyController
};


module.exports = WeeklyWeatherComponent;
