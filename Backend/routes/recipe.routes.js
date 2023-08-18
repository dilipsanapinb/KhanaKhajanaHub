const express = require('express');
const reciController=require('../controllers/recipe.controllers')
const recipeRoutes = express.Router();

// get all receipts 
recipeRoutes.get('/', reciController.getAllRecipies);

// get a receipt by id
recipeRoutes.get('/:id',reciController.getRecipeById)


// get nutrinets by id
recipeRoutes.get('/:id/nutrients', reciController.getNutrinetsByIs);

// search recipes
recipeRoutes.get('/api/recipes/search', reciController.searchRecipes);

module.exports = recipeRoutes;