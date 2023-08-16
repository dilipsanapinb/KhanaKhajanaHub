const express = require('express');
const reciController=require('../controllers/recipe.controllers')
const recipeRoutes = express.Router();

recipeRoutes.get('/api/recipes', reciController.getAllRecipies);


module.exports = recipeRoutes;