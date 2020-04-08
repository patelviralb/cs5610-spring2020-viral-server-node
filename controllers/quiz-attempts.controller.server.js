const quizAttemptDao = require('../daos/quiz-attempts.dao.server');

module.exports = (app) => {
    app.post('/api/quizzes/:quizId/attempts', (request, response) =>
        quizAttemptDao.createAttempt(request.params['quizId'], request.body)
            .then(attempt => response.json(attempt))
    );

    app.get('/api/quizzes/:quizId/attempts', (request, response) =>
        quizAttemptDao.findAttemptsForQuiz(request.params['quizId'])
            .then(attempts => response.json(attempts))
    );
};
