const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    /* response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS'); */
    response.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
});

mongoose.connect('mongodb://localhost:27017/vp-cs5610-sp2020-server-mongo',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);
require('./controllers/users.controller.server')(app);

app.listen(PORT);
console.log("Server started.....");
console.log(`Go to http://localhost:${PORT}`);
