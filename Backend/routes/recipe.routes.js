const express = require('express');
const reciController=require('../controllers/recipe.controllers')
const recipeRoutes = express.Router();

// get all receipts 
recipeRoutes.get('/', reciController.getAllRecipies);

// get a receipt by id
recipeRoutes.get('/:id',reciController.getRecipeById)
module.exports = recipeRoutes;