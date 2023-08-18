const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/user.routes");
const recipeRoutes = require("./routes/recipe.routes");
const savedRecipes = require("./routes/savedrecipes.routes");
const passport = require("passport");
const passportSetup = require("./config/passport-config");
const authRoute = require("./routes/auth.routes");
const session = require("express-session");
const cookiesession = require("cookie-session");
const cors = require("cors");
const app = express();

// express session

app.use(
  session({
    secret: process.env.secrete,
    resave: false,
    saveUninitialized: false,
    // store:new SequelizeStore({db:sequelize})
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to KhanaKhazanaHub App" });
});

// routes
app.use("/user", userRoutes);
app.use("/recipe", recipeRoutes);
app.use("/savedrecipe", savedRecipes);

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);

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
