/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const mongoose = require('mongoose');
const createBook = require('./router/createBook');

app.use(bodyParser.json());
app.use('/books', createBook);

mongoose.connect('mongodb://0.0.0.0:27017', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected!');
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3010, () => {
  console.log('listening to port 3010');
});
