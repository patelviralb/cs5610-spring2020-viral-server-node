const questionsModel = require('../models/questions/questions.model.server');
const quizzesModel = require('../models/quizzes/quizzes.model.server');

const findAllQuestions = () =>
    questionsModel.find();

const findQuestionById = (quizId) =>
    questionsModel.findById(quizId);

const findQuestionsForQuiz = (quizId) =>
    quizzesModel.findById(quizId)
        .populate('questions').then(quiz => quiz.questions);

module.exports = {
    findAllQuestions, findQuestionById, findQuestionsForQuiz
};
