const express = require('express');
const app = express();

app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    /* response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS'); */
    response.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
});


require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);

app.listen(3000);
