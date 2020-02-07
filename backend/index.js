var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());


var router = require("../backend/router/router")


mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'erreur connexion :'));
db.once('open', function() {
    console.log('Connecté')
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use("/", router);



app.listen(5000, () => console.log('Server started'))

