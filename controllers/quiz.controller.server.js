const quizService = require('../services/quiz.service.server');

module.exports = (app) => {
    app.get('/api/quizzes', (request, response) => {
        response.json(quizService.findAllQuizzes());
    });

    app.get('/api/quizzes/:quizId', (request, response) => {
        const quizId = request.params['quizId'];
        response.json(quizService.findQuizById(quizId));
    });
}