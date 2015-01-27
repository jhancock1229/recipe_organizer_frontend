angular.module('myApp.splash', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/splash', {
    templateUrl: 'splash/splash.html',
    controller: 'SplashCtrl'
  });
}])

.controller('SplashCtrl', ['$scope', 'Restangular', function($scope, Restangular) {

}]);