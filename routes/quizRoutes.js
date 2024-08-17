const express = require('express');
const router = express.Router();
const { getQuestions, submitQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/questions', authMiddleware, getQuestions);
router.post('/submit', authMiddleware, submitQuiz);

module.exports = router;