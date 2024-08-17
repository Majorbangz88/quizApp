const express = require('express');
const router = express.Router();
const { getQuestions, submitQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);
router.post('/getquestions', getQuestions);
router.post('/submit', submitQuiz);

module.exports = router;