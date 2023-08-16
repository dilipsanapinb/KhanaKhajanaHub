const authorize = (user_roles) => {
    const userRole = req.body.userrole;
    return (req, res, next) => {
        if (user_roles.include(userRole)) {
            next();
        } else {
            return res.status(401).json({ message: "user is not authorised" });
        }
    };
};

module.exports = authorize;
