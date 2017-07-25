(function() {

'use strict';

angular.module('app')
.controller('RecipeDetailController', ['$scope', 'dataService', '$location', '$routeParams', function($scope, dataService, $location, $routeParams) {
  //gets the recipe ID from routepParams
  $scope.ID = $routeParams.id;
  //gets recipe by ID and assigns it to the scope.recipe to display on page
  $scope.getRecipeID = function() {
    dataService.getRecipeID($scope.ID, function(response) {
      $scope.recipe = response.data;
    });
  };
  $scope.getRecipeID();
  //gets all categories and assigns it to scope.getCategories to display on page
  dataService.getCategories(function(response) {
    $scope.getCategories = response.data;
  });
  //adds an ingredient 
  $scope.addIngredient = function() {
    $scope.recipe.ingredients.push({
      foodItem: "New Item",
      condition: "New Item",
      amount: "New Item"
    });
  };
  //deletes an ingredient 
  $scope.deleteIngredient = function(index) {
    $scope.recipe.ingredients.splice(index, 1);
  }
//adds a new step 
$scope.newStep = function() {
  $scope.recipe.steps.push({description: "New Step"});
};
//deletes a step 
  $scope.deleteStep = function(index) {
    $scope.recipe.steps.splice(index, 1);
  }
  //saves recipe
  $scope.saveRecipe = function() {
    dataService.putID($scope.recipe._id, $scope.recipe, function(response) {
        $scope.recipe = response.data;
        $location.url('/');
          }, function(reason) {
            //console.log(reason);
            $scope.errors = [];
             for (var error in reason.data.errors) {
                 //console.log(reason.data.errors[error][0]);
                 $scope.errors.push(reason.data.errors[error][0].userMessage)
               }
             });
           };
        $scope.goBack = ()=> {
          $location.url('/#')
        };

        dataService.getFoodItems(function(response) {
          $scope.foodItems = response.data;
        });
}]); //end controller
})(); //end self invoked function