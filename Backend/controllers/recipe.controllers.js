const axios = require('axios');
require('dotenv').config();
exports.getAllRecipies = async(req,res) => {
    try {
        const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
        if (!SPOONACULAR_API_KEY) {
            return res.status(404).json({ message: "API-Key not found" })
        }

        // Fetching the data from api

        const { page = 1, pageSize = 10 } = req.query;
        console.log("Received page:", page, "pageSize:", pageSize);
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&offset=${(page-1)*pageSize}`
            );

            const recipes = response.data.results;
            const totalCount = response.data.totalResults;
            res.status(200).json({ recipes, totalCount });
        } catch (error) {
            console.log('Error fetching recipes:',error.message);
            res.status(500).json({message:"Something went wrong at fetching data from api"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Something went wrong at geting all recipies"})
    }
}