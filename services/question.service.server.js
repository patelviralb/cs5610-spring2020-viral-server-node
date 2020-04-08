const questionsDao = require('../daos/questions.dao.server');

const findAllQuestions = () =>
    questionsDao.findAllQuestions();

const findQuestionById = (quizId) =>
    questionsDao.findQuestionById(quizId);

const findQuestionsForQuiz = (quizId) =>
    questionsDao.findQuestionsForQuiz(quizId);

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
};
