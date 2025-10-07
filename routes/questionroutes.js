const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authmiddleware'); // protect routes with auth
const { createQuestion, getAllQuestions, getSingleQuestion } = require('../controllers/quationcontroller'); // controller functions

// Create a new question (protected)
router.post('/createquestion', authMiddleware, createQuestion);

// Get all questions (protected)
router.get('/allquestion', authMiddleware, getAllQuestions);

// Get a single question by ID (protected)
router.get('/singlequestion/:id', authMiddleware, getSingleQuestion);

// export router
module.exports = router;
