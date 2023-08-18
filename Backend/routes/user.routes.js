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

// login succcess
userRoutes.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json(
            {
                error: false,
                message:"Successfully Logged In"
            }
        )
    } else {
        res.
            status(403).
            json(
                {
                    error: true,
                    message:"Not Authorized"
                })
    }
})

// login failed

userRoutes, get('login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message:"Login failed"
    })
})
// login by google
userRoutes.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect:'/login/failed',
    })
)

// 
userRoutes.get('/google', passport.authenticate('google', ['profile', 'email']));

// logout

userRoutes.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})


module.exports = userRoutes;