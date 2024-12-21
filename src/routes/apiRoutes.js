const express = require('express');
const router = express.Router();
const questionService = require('../services/questionService');
const questionController = require('../controllers/questionController');


router.get('/questions', (req, res) => {
    const questions = questionService.getAllQuestions();
    res.send(questions);
});


router.get('/random_question', (req, res) => {
    const question = questionService.getRandomQuestionWithoutDelete();
    res.send(question);
});

router.post('/random_question', (req, res) => {
    const {currentQuestionId} = req.body;
        const question = questionService.getRandomQuestion(currentQuestionId);
        if(question) {
            questionService.deleteQuestion(question.id)
        }
    res.send(question);
});


module.exports = router;