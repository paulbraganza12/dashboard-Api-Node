require('dotenv').config();

const express = require("express");
const data = require('./routes/data_route')
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

//use routes
app.use('/api/data', data);

const listener = app.listen(5000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

