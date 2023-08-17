const express = require('express');

const savedRecipeController = require('../controllers/savedrecipes.controller');

const protected = require("../middlewares/authentication.middleware");

const savedRecipeRoutes = express.Router();

// get all recipies per user
savedRecipeRoutes.get('/', protected, savedRecipeController.getAllSavedRecipies);

// save the recipe to databse
savedRecipeRoutes.post('/save', protected, savedRecipeController.saveRecipeToDatebase);

// ḍelete the saved recipe from database
savedRecipeRoutes.delete('/:recipeid/delete',protected,savedRecipeController.deleteSavedRecipe)



module.exports=savedRecipeRoutes