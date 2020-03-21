const questionService = require('../services/question.service.server');

module.exports = (app) => {
    app.get('/api/quizzes/:quizId/questions', (request, response) => {
        response.json(questionService.findQuestionsForQuiz(request.params['quizId']));
    });
}