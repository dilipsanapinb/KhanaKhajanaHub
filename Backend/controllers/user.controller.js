const { sequelize, users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allusers = await users.findAll();
    res.status(200).json({ message: "All users data", allusers });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong on the server at getting the all users",
    });
  }
};

// registe the user

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    if (!username || !email || !password) {
      return res.status(404).json({ message: "All fields required" });
    }
    const existingUser = await users.findOne({ where: { email } });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Error occurred during password hashing" });
      } else {
        try {
          const user = await users.create({
            username,
            email,
            password: hash,
          });
          res.status(201).json({ message: "Registration is successful", user });
        } catch (err) {
          res.status(500).send({
            message: "Error occur at registering the use",
            Error: err.message,
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong on the server at register the user",
    });
  }
};

// login the user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await users.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        // console.log(user);
        let hashpass = user.password;
        bcrypt.compare(password, hashpass, async function (err, result) {
            if (result) {
                var token = jwt.sign({ userId: user.id }, process.env.secrete);
                res.send({ msg: "Login is Successfull", token });
            } else {
                res.status(401).send("Wrong Credential's");
                console.log(err);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong on the server" });
    }
};
