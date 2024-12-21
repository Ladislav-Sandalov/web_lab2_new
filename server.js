const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger/swagger.json');
const questionRoutes = require('./src/routes/questionRoutes');
const apiRoutes = require('./src/routes/apiRoutes'); // Импорт роутера для API
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'src', 'views'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Подключаем swagger
    app.use('/api', apiRoutes);  // Подключаем API-роуты
app.use('/', questionRoutes);


app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});