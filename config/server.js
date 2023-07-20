const express = require('express');
const consing = require('consign');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consing()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);


module.exports = app;