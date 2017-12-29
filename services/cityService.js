// SERVICES

weatherApp.service('cityService', ['$http', function ($http) {
    this.getWeather = function(cityId) {
        return $http.get(`http://api.openweathermap.org/data/2.5/forecast`,
        { params: { id: cityId, APPID: '75c1af1ffe36d572b36e6421218eab9e' } })
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        })
    }
}]);
