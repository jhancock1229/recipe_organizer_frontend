'use strict';

angular.module('myApp.ingredients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ingredients', {
    templateUrl: 'ingredients/ingredients.html',
    controller: 'IngredientsCtrl'
  });
}])

.controller('IngredientsCtrl', [function() {

}]);