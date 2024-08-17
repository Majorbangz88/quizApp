const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);
router.post('/api/logout', logoutUser);

module.exports = router;
