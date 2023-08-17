const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/user.routes");
const recipeRoutes = require("./routes/recipe.routes");
const savedRecipeRoutes = require('./routes/savedrecipes.routes');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to KhanaKhazanaHub App" });
});

// routes

app.use("/user", userRoutes);
app.use("/recipe", recipeRoutes);
app.use('/savedrecipe', savedRecipeRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(8000, async () => {
      console.log("Server is running on port 8000");
    });
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.log(err.message);
    console.log("Something went wrong at connction to Db");
  });
