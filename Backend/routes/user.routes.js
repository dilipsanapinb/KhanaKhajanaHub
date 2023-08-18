const express = require("express");
require('dotenv').config();
const userController = require("../controllers/user.controller");
const passport = require("passport");

const userRoutes = express.Router();

// getting all users
userRoutes.get("/api/users", userController.getAllUsers);

// register the user
userRoutes.post("/api/register", userController.registerUser);

// login user
userRoutes.post("/api/login", userController.loginUser);


module.exports = userRoutes;