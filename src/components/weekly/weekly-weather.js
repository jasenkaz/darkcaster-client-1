<section>
  <div>
    <label>Latitude:</label>
    <input type="number" ng-model='$ctrl.lat' />
  </div>
  <div>
    <label>Longitude:</label>
    <input type="number" ng-model='$ctrl.lon' />
  </div>
  <div>
    <button type="button" ng-click='$ctrl.search()'>Search</button>
  </div>
</section>
<section ng-if='$ctrl.weatherData'>
  <header>
    <p>Precipitation Probability: {{ $ctrl.weatherData.precipProbability * 100 | number:2 }}%</p>
    <img ng-src="{{ $ctrl.imageLookup[$ctrl.weatherData.icon] }}" />
    <p>{{ $ctrl.weatherData.time * 1000 | date:"short" }}</p>
  </header>
  <main>
    <h1>Humidity: {{ $ctrl.weatherData.humidity * 100 | number:0 }}%</h1>
    <div>
      <h1>Temperature: {{ $ctrl.weatherData.temperature | number:0 }}&deg; F</h1>
      <h2>Feels Like: {{ $ctrl.weatherData.apparentTemperature | number:0 }}&deg; F</h2>
    </div>
    <h1>UV Index: {{ $ctrl.weatherData.uvIndex }}</h1>
  </main>
  <footer>
    <h1>Summary: {{ $ctrl.weatherData.summary }}</h1>
  </footer>
</section>
//<!-- <pre>{{ $ctrl.weatherData | json }}</pre> -->
