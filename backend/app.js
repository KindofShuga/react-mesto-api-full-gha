const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const corsHandler = require('./middlewares/corsHandler');
const router = require('./routes/index');
const { PORT, DB_ADDRESS } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect(DB_ADDRESS);
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: 'http://mesto.alinat.nomoredomains.work' }));
app.use(corsHandler);
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});