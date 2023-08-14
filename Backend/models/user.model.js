module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('users', {
        username: {
            type: DataTypes.STRING,
            allowNUll:false
        },
        email: {
            type: DataTypes.STRING,
            allowNUll: false,
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNUll:false
        }
    });
    return User;
}