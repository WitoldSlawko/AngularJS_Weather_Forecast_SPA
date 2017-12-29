// DIRECTIVES
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: './templates/weatherReport.tpl.html',
       scope: {
           weatherInfo: "=",
           tempCalc: "&"
       }
   }
});