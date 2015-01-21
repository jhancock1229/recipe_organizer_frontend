'use strict';

angular.module('recipeOrganizer', [
    'ngRoute',
    'recipeOrganizer.recipes',
    'recipeOrganizer.ingredients',
    'recipeOrganizer.version',
    'recipeOrganizer.addRecipe',
    'restangular'
]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/recipes'});

        RestangularProvider.setBaseUrl('http://localhost:8001')

    }]);