const mongoose = require('mongoose');

const QuizAttemptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quizId: { type: String, required: true },
    score: { type: Number, required: true },
    answers: [{
        questionId: { type: String },
        selectedOption: { type: String }
    }],
    date: { type: Date, default: Date.now },
});

const QuizAttempt = mongoose.model('QuizAttempt', QuizAttemptSchema);
module.exports = QuizAttempt;
