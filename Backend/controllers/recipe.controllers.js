const axios = require("axios");
require("dotenv").config();
const { debounce } =require('lodash')
// Get all Recipes
exports.getAllRecipies = async (req, res) => {
    try {
        const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
        if (!SPOONACULAR_API_KEY) {
            return res.status(404).json({ message: "API-Key not found" });
        }

        // Fetching the data from api

        const { page = 1, pageSize = 10 } = req.query;
        console.log("Received page:", page, "pageSize:", pageSize);
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&offset=${(page - 1) * pageSize
                }&limit=50`
            );

            const recipes = response.data.results;
            const totalCount = response.data.totalResults;
            res.status(200).json({ recipes, totalCount });
        } catch (error) {
            console.log("Error fetching recipes:", error.message);
            res
                .status(500)
                .json({ message: "Something went wrong at fetching data from api" });
        }
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at geting all recipies" });
    }
};

// Get a recipe by id

exports.getRecipeById = async (req, res) => {
    try {
        const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
        if (!SPOONACULAR_API_KEY) {
            return res.status(404).json({ message: "API-Key not found" });
        }

        const recipeId = req.params.id;
        // Fetch recipe details from the API;
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOONACULAR_API_KEY}`
        );
        const recipeDetails = response.data;
        res.status(200).json(recipeDetails);
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at geting a recipie by id" });
    }
};

// get nutrients by id

exports.getNutrinetsByIs = async (req, res) => {
    try {
        const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
        if (!SPOONACULAR_API_KEY) {
            return res.status(404).json({ message: "API-Key not found" });
        }
        const recipeId = req.params.id;
        // Fetch recipe details from the API;
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${SPOONACULAR_API_KEY}`
        );
        const nutrientsDetails = response.data;
        res.status(200).json(nutrientsDetails);
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at geting a recipie by id" });
    }
};

// Search recipies by query

// Create a debounced
const debouncedSearchRecipes = debounce(async (query, res) => {
    try {
        const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
        if (!SPOONACULAR_API_KEY) {
            return res.status(404).json({ message: "API-Key not found" });
        }

        // Fetch recipe details from the API;
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch`,
            {
                params: {
                    apiKey: SPOONACULAR_API_KEY,
                    query,
                },
            }
        );

        const recipes = response.data.results;
        res.status(200).json({ recipes });
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at search recipe by query" });
    }
}, 500);

// Handle the searchRecipes route
exports.searchRecipes = (req, res) => {
    const { query } = req.query;
    debouncedSearchRecipes(query, res);
};