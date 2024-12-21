const Question = require('../models/questionModel');

    let questions = [];
    let nextId = 1;
    const MAX_QUESTIONS = 10;


    const addQuestion = (questionText) => {
         if (questions.length >= MAX_QUESTIONS) {
             throw new Error('Достигнуто максимальное количество вопросов.');
         }
        const question = new Question(nextId++, questionText);
        questions.push(question);
        console.log('Новый вопрос добавлен:', question);
        return question;
    };

    const getAllQuestions = () => {
        return questions;
    };

   const getRandomQuestion = (id) => {
       if (questions.length === 0) return null;
        if(!id) {
           const randomIndex = Math.floor(Math.random() * questions.length);
           return questions[randomIndex];
         }
         return questions.find(q => q.id == id);
       };
    const getRandomQuestionWithoutDelete = () => {
         if (questions.length === 0) return null;
          const randomIndex = Math.floor(Math.random() * questions.length);
         return questions[randomIndex]
    };

    const deleteQuestion = (id) => {
        questions = questions.filter(q => q.id !== id);
    };

    const updateQuestion = (id, newText) => {
        const question = questions.find(q => q.id === id);
        if (question) {
            question.text = newText;
        }
    };

    module.exports = {
        addQuestion,
        getAllQuestions,
        getRandomQuestion,
        getRandomQuestionWithoutDelete,
        deleteQuestion,
        updateQuestion,
    };