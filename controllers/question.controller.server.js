const questionsService = require('../services/questions.service.server');

module.exports = function (app) {
    app.get('/api/quizzes/:quizId/questions', (request, response) => {
        questionsService.findQuestionsForQuiz(request.params['quizId'])
            .then(questions => response.json(questions));
    });

    app.get('/api/questions', (request, response) => {
        questionsService.findAllQuestions()
            .then(allQuestions => response.json(allQuestions));
    });

    app.get('/api/questions/:questionId', (request, response) => {
        questionsService.findQuestionById(request.params['questionId'])
            .then(question => response.json(question))
    });
};
