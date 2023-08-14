const jwt = require("jsonwebtoken");
require("dotenv").config();

const protected = (req, res, next) => {
    try {
        const token = req.headers.authorization.splir(" ")[1];
        if (!token) {
            return res
                .status(404)
                .json({ message: "Token not found, Please login first" });
        }
        const decoded = jwt.verify(token, process.env.secrete);
        if (decoded) {
            const userId = decoded.usedId;
            req.body.usedId = userId;
            next();
        }
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at authenticating the user" });
    }
};

module.exports = protected;
