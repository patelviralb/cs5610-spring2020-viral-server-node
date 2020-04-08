const quizzesModel = require('../models/quizzes/quizzes.models.server');

const findAllQuizzes = () =>
    quizzesModel.find()
        .populate('questions');

const findQuizById = (quizId) =>
    quizzesModel.findById(quizId);

module.exports = {
    findAllQuizzes,
    findQuizById
};
