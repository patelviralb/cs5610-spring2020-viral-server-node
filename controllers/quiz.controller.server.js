const quizzesService = require('../services/quiz.service.server');

module.exports = (app) => {
    app.get('/api/quizzes', (request, response) => {
        quizzesService.findAllQuizzes()
            .then(allQuizzes => response.json(allQuizzes))
    });

    app.get('/api/quizzes/:quizId', (request, response) => {
        const quizId = request.params['quizId'];
        quizzesService.findQuizById(quizId)
            .then(quiz => response.json(quiz))
    });
};
