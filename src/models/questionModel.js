// Модель вопроса
class Question {
    constructor(id, text) {
        this.id = id; // Уникальный идентификатор вопроса
        this.text = text; // Текст вопроса
    }
}

module.exports = Question; // Экспортируем модель вопроса