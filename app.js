const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./router/routes');
const app = express();
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/muber');

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err._message});
});

module.exports = app