'use strict';

angular.module('recipeOrganizer.addRecipe', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add-recipe', {
            templateUrl: 'add-recipe/add-recipe.html',
            controller: 'AddRecipeCtrl'
        });
    }])

    .controller('AddRecipeCtrl', ['$scope', 'Restangular', '$location', function ($scope, Restangular, $location) {
        $scope.recipe = {};

        $scope.addRecipe = function () {
            Restangular.all('add-recipe').customPOST($scope.recipe).then(function () {
                    alert("Your recipe was successfully created");
                    $location.path('/recipes');
                },
                function () {
                    alert("There was a problem creating your recipe. Please try again.")
                })}
    }]);