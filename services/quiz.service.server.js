let quizzes = require('./quizzes');

const findAllQuizzes = () => quizzes;

const findQuizById = (quizId) => quizzes.find(quizToReturn => quizToReturn._id === quizId);

module.exports = {
    findAllQuizzes,
    findQuizById
}