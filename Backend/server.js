const express = require('express');
const {sequelize } = require('./models');

const app = express();


sequelize.sync().then(() => {
    app.listen(8000, async () => {

        console.log('Server is running on port 8000');
    });
    console.log('Connected to the Database');
}).catch((err) => {
    console.log(err.message);
    console.log("Something went wrong at connction to Db");
})
