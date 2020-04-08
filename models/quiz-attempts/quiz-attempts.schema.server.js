const mongoose = require('mongoose');
const questionSchema = require('../questions/questions.schema.server');

const quizAttempts = mongoose.Schema({
    score: Number,
    quizzes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizzesModel'
    },
    answers: [
        questionSchema
    ]
}, {collection: 'quizAttempts'});

module.exports = quizAttempts;
