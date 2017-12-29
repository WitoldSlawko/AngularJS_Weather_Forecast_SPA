// SERVICES

weatherApp.service('weatherService', ['$http', 'cityService', function ($http, cityIdService) {
    return $http.get('https://weather-app-poland.firebaseio.com/.json')
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        })
}]);
