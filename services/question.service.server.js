let questions = require('./questions');

const findQuestionsForQuiz = (quizId) => questions.filter(questions => questions.quizId === quizId);

module.exports = {
    findQuestionsForQuiz
}