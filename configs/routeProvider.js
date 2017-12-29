// ROUTES
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/:id', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .otherwise({
            redirectTo: '/'
        })
});