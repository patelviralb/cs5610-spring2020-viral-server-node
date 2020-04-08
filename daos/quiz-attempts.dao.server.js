const quizAttemptsModel = require(
    '../models/quiz-attempts/quiz-attempts.models.server');

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0;
    questions.forEach(question => question.answer === question.correct
        ? numberOfCorrectQuestions++ : numberOfCorrectQuestions);
    return 100 * numberOfCorrectQuestions / questions.length
};

const findAttemptsForQuiz = (quizId) =>
    quizAttemptsModel.find({quizzes: quizId}).populate('quizzes', 'title');

const createAttempt = (quizId, attempt) =>
    quizAttemptsModel.create(
        {
            quizzes: quizId,
            answers: attempt,
            score: scoreQuiz(attempt)
        });

module.exports = {
    createAttempt,
    findAttemptsForQuiz
};
