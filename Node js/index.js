const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db");
const detailsController = require('./controller/detailsController');

var app = express();
app.use(bodyParser.json());


app.listen(3000, () => console.log('server strat at port : 3000'));

app.use('/details', detailsController);
