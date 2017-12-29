// CONTROLLERS

weatherApp.controller('forecastController', ['$scope', '$location', '$resource', '$routeParams', 'cityService', 'weatherService', function ($scope, $location, $resource, $routeParams, cityService, weatherService) {

    $scope.cities = [];
    $scope.cityId = $routeParams.id;
    $scope.displayCity;
    $scope.spectrum;

    $scope.typing = function(){
        $scope.spectrum = document.getElementById('selector').length;
    }

    $scope.alpha = function(a, b) {
        const genreA = a.name.toUpperCase();
        const genreB = b.name.toUpperCase();
        let comparison = 0;
        if (genreA > genreB) {
            comparison = 1;
        } else if (genreA < genreB) {
            comparison = -1;
        }
        return comparison;
    }

    $scope.convertToCelcius = function(degK) {
        return Math.round(degK - 273);
    }

    $scope.$watch('cityId', function () {
        if ($routeParams.id) {
            cityService.getWeather($routeParams.id).success(function (data) {
                $scope.displayCity = data;
                console.log(data);
            })
        }
    });

    $scope.cityLogger = function (selectedCity) {
        $location.path(`/${selectedCity}`);
    }

    weatherService.success(function (data) {
        data = data.sort($scope.alpha);
        $scope.cities = data;
    });

}]);