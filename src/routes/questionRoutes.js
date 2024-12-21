const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'views', 'index.html')));
router.get('/add_question', (req, res) => res.sendFile(path.join(__dirname, '..', 'views', 'add_question.html')));
router.get('/contacts', (req, res) => res.sendFile(path.join(__dirname, '..', 'views', 'contacts.html')));

router.get('/questions', questionController.getQuestionsList);
router.post('/questions', questionController.addQuestion);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', (req, res) => {
    questionController.deleteQuestion(req, res);
    res.redirect('/questions')
});


router.get('/random_question', (req, res) => res.sendFile(path.join(__dirname, '..', 'views', 'random_question.html')));
router.post('/random_question', (req, res) => {
   res.redirect('/random_question');
});
module.exports = router;