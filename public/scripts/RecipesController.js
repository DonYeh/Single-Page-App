(function(){

'use strict';

angular.module('app')
.controller('RecipesController', ['$scope', 'dataService', '$location', function($scope, dataService, $location) {
  //gets all the recipes and assigns them to the scope.recipes to display on page
  dataService.getRecipes(function(response){
    $scope.recipes = response.data;
  }); //end getRecipes

//gets a particular category of recipes and assigns them to the scope.recipes to display on page
$scope.getRecipesFromCategory = function(){
  dataService.getRecipesFromCategory($scope.category, function(response){
    $scope.recipes = response.data
  }); //end getRecipesFromCategory
}; //end scope.getRecipesFromCategory

// gets all the categories and assigns them to the scope.getCategories to display on page
dataService.getCategories(function(response){
  //console.log("this is the categories array: " + response.data);
  $scope.getCategories = response.data;
}); //end getCategories

// deletes a recipe 
$scope.deleteRecipe = function($index) {
    if (confirm(`Do you really want to delete the ${$scope.recipes[$index].name} recipe?`)) {
      dataService.deleteRecipe($scope.recipes[$index]._id, function(response) {
        console.log(response);
        dataService.getRecipes(function(response) {
          console.log(response.data);
          $scope.recipes = response.data;
        }); //end getRecipes
      }); //end deleteRecipe
  } //end if
}; //end scope.deleteRecipe

//instantiaties a newRecipe object to display in the view
var newRecipe = {
  name:"New Recipe Name",
  description:"New Recipe Description",
  category:"Other",
  prepTime:0,
  cookTime:0,
  ingredients:[
    {foodItem: "New Item", condition: "New Item", amount: "New Item"},
  ],steps:[
    {description: "This is a new recipe description"}
  ]
};
//adds the newRecipe Object to addRecipe and sends user to the Edit Page
$scope.addRecipe = function() {
      dataService.addRecipe(newRecipe, function(response) {
        $location.url('/edit/' + response.data._id);
      },
      function(reason) {
        console.log(reason)
      });
}; //end addRecipe
}]); //end controller
})(); //end self invoked function