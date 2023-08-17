const { sequelize, savedrecipes } = require('../models');



exports.getAllSavedRecipies = async(req,res) => {
    try {
        const userId = req.userId;

        const allSavedRecipies = await savedrecipes.findAll({ where: { userId } });
        
        res.status(200).json({ message: "All saved recipies data", allSavedRecipies });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
        message:
            "Something went wrong on the server at getting the all saved recipes",
        });
    }
}

// save the recipe
exports.saveRecipeToDatebase =async (req,res) => {
    try {
        const { recipeid, title, image } = req.body;

        const userId = req.userId;
        if (!userId) {
            return res.status(401).json("UnAuthorized request")
        }
        const savedRecipe = await savedrecipes.create({ recipeid, title, image, userId })
        
        res.status(201).json({message:"Recipe saved successfully",savedRecipe})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:
                "Something went wrong on the server at saving the recipe to database",
        });
    }
}

// delete the saved recipe from database

exports.deleteSavedRecipe = async(req,res) => {
    try {
        const userId = req.userId;
        const recipeIdToDelete = req.params.recipeid;

        const savedRecipe = await savedrecipes.findOne({
            where: {
                userId,
                recipeid: recipeIdToDelete
            }
        });
        if (!savedRecipe) {
            return res.status(404).json({message:"Saved recipe not found"})
        }

        // delete the recipe
        await savedRecipe.destroy();

        res.status(200).json({message:"Recipe deleted successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:
            "Something went wrong on the server at deleting the recipe to database",
        });
    }
}