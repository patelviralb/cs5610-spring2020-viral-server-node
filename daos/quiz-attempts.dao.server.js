const quizAttemptsModel = require(
    '../models/quiz-attempts/quiz-attempts.model.server');

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0;
    questions.forEach(question => question.answer === question.correct
        ? numberOfCorrectQuestions++ : numberOfCorrectQuestions);
    return 100 * numberOfCorrectQuestions / questions.length
};

const findAttemptsForQuiz = (quizId) =>
    quizAttemptsModel.find({quiz: quizId}).populate('quiz', 'title _id');

const createAttempt = (quizId, attempt) =>
    quizAttemptsModel.create(
        {quiz: quizId, answers: attempt, score: scoreQuiz(attempt)});

module.exports = {
    createAttempt,
    findAttemptsForQuiz
};
