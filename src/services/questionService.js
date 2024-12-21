const questionRepository = require('../repositories/questionRepository');

// Функция для добавления вопроса
const addQuestion = (questionText) => {
    return questionRepository.addQuestion(questionText);
};

// Функция для получения всех вопросов
const getAllQuestions = () => {
    return questionRepository.getAllQuestions();
};

// Функция для удаления вопроса
const deleteQuestion = (id) => {
    questionRepository.deleteQuestion(id);
};

// Функция для обновления вопроса
const updateQuestion = (id, newText) => {
    questionRepository.updateQuestion(id, newText);
};

// Функция для получения случайного вопроса
const getRandomQuestion = (id) => {
    return questionRepository.getRandomQuestion(id);
};

const getRandomQuestionWithoutDelete = () => {
    return questionRepository.getRandomQuestionWithoutDelete();
    };


module.exports = {
    addQuestion,
    getAllQuestions,
    deleteQuestion,
    updateQuestion,
    getRandomQuestion,
        getRandomQuestionWithoutDelete
};