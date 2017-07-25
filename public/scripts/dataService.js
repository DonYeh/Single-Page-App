
((() => {
  angular.module('app')
   //service contains all routes for the Angular application
   .service('dataService', ['$http', function($http) {
         // gets all recipes
         this.getRecipes = callback => {
           $http.get('http://localhost:5000/api/recipes')
           .then(callback);
         };
         // gets recipes from a particular category
         this.getRecipesFromCategory = (category, callback) => {
           $http.get(`http://localhost:5000/api/recipes?category=${category}`)
           .then(callback);
         };
         // gets a recipe by ID 
         this.getRecipeID = (id, callback) => {
           $http.get(`http://localhost:5000/api/recipes/${id}`)
           .then(callback);
         };
         // updates recipe by ID 
         this.putID = (id, data, callback, failure) => {
           $http.put(`http://localhost:5000/api/recipes/${id}`, data)
           .then(callback, failure)
         };
         // adds a new recipe
         this.addRecipe = (recipe, callbackSuccess, callbackFailure) => {
           $http.post('http://localhost:5000/api/recipes', recipe)
           .then(callbackSuccess, callbackFailure);
         };
         // deletes a recipe by ID 
         this.deleteRecipe = (id, callbackSuccess, callbackFailure) => {
           $http.delete(`http://localhost:5000/api/recipes/${id}`)
           .then(callbackSuccess, callbackFailure)
         };
         // gets all the recipe categories
         this.getCategories = callback => {
           $http.get('http://localhost:5000/api/categories')
          .then(callback);
        };
        // gets all the food items
        this.getFoodItems = callback => {
          $http.get('http://localhost:5000/api/fooditems')
          .then(callback);
        };
}]); //end service
}))(); //end self invoked function