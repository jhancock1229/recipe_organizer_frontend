'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.recipes',
    'myApp.recipeDetail',
    'myApp.ingredients',
    'myApp.addRecipe',
    'myApp.version',
    'myApp.splash',
    'restangular'
]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/splash'});

        RestangularProvider.setBaseUrl('http://localhost:8001')

    }]);
