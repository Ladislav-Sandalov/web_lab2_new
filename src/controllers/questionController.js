const questionService = require('../services/questionService');
const path = require('path');

const getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

const addQuestion = (req, res) => {
    const questionText = req.body.question;
    if (!questionText) {
        return res.status(400).send({ message: 'Вопрос не может быть пустым.' });
    }
    questionService.addQuestion(questionText);
    res.redirect('/add_question');
};

    const getQuestionsList = (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'question_list.html'));
    };

const deleteQuestion = (req, res) => {
    const questionId = parseInt(req.params.id);
    questionService.deleteQuestion(questionId);
};

const updateQuestion = (req, res) => {
    const questionId = parseInt(req.params.id);
    const newQuestionText = req.body.question;
    questionService.updateQuestion(questionId, newQuestionText);
        res.redirect('/questions');
};

const randomQuestion = (req, res) => {
        if (req.method === 'POST') {
        return res.sendFile(path.join(__dirname, '..', 'views', 'random_question.html'))
        } else {
        res.sendFile(path.join(__dirname, '..', 'views', 'random_question.html'));
    }
};

module.exports = {
    getHomePage,
    addQuestion,
    getQuestionsList,
    deleteQuestion,
    updateQuestion,
    randomQuestion,
};