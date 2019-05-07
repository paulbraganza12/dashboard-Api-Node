require('dotenv').config();

const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

var DB = null;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

MongoClient.connect(process.env.DB_URL,
    (err, client) => {
        if (client != null) {
            console.log('Connected to db');
            DB = db = client.db(process.env.DB_NAME);
        }
    })

app.get('/api/data/top', (req, res) => {
    DB.collection("top").find({}).toArray((err, result) => {
        if (err) {
            res.send('error')
        } else {
            res.send(result)
        }

    })
})

app.get('/api/data/week', (req, res) => {
    DB.collection("week").find({}).toArray((err, result) => {
        if (err) {
            res.send('error')
        } else {
            res.send(result)
        }

    })
})


const listener = app.listen(5000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

