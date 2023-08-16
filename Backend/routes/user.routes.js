const express = require("express");

const userController = require("../controllers/user.controller");

const userRoutes = express.Router();

// getting all users
userRoutes.get("/api/users", userController.getAllUsers);

// register the user
userRoutes.post("/api/register", userController.registerUser);

// login user
userRoutes.post("/api/login", userController.loginUser);
module.exports = userRoutes;
