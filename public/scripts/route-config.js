
(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  // The Angular $routeProvider is used to configure routes for your application.
  // Three routes are configured below:  
  function config($routeProvider) {
    $routeProvider
      // 1) The root of the application "/" which serves up the "Recipes" view.
      .when('/', {
        controller: 'RecipesController',
        controllerAs: 'vm',
        templateUrl: '/templates/recipes.html'
      })
      // 2) The recipe edit route "/edit/:id" which serves up the "Recipe Detail" view.
      .when('/edit/:id', {
        controller: 'RecipeDetailController',
        controllerAs: 'vm',
        templateUrl: '/templates/recipe-detail.html'
      })
      // 3) The recipe add route "/add" which also serves up the "Recipe Detail" view.
      .when('/add', {
        controller: 'RecipeDetailController',
        controllerAs: 'vm',
        templateUrl: '/templates/recipe-detail.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();

