const quizzesModel = require('../models/quizzes/quizzes.models.server');

const findAllQuizzes = () =>
    quizzesModel.find()
        .populate('questions');

const findQuizById = (quizId) =>
    quizzesModel.findById(quizId)
        .populate('questions');

module.exports = {
    findAllQuizzes,
    findQuizById
};
