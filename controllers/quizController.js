const { fetchQuestions } = require('../services/quizService');
const User = require('../models/User');
const QuizAttempt = require('../models/QuizAttempt');

exports.getQuestions = async (req, res) => {
    const { amount, category, difficulty, type } = req.query;

    try {
        const questions = await fetchQuestions(amount, category, difficulty, type);
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.submitQuiz = async (req, res) => {
    const { userId, quizId, score, answers } = req.body;

    try {
        const attempt = new QuizAttempt({
            userId,
            quizId,
            score,
            answers,
        });

        await attempt.save();

        await User.findByIdAndUpdate(userId, {
            $push: {
                scoreList: {
                    quizId,
                    score,
                },
            },
        });

        res.status(201).json({ message: 'Quiz attempt saved successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
