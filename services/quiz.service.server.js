const quizzesDao = require('../daos/quizzes.dao.server');

const findAllQuizzes = () =>
    quizzesDao.findAllQuizzes();

const findQuizById = (quizId) =>
    quizzesDao.findQuizById(quizId);

module.exports = {
    findAllQuizzes,
    findQuizById
};
