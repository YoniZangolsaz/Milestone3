/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();
import createBook from './books/bookRouter';
import createWriter from './writer/writerRouter';


app.use(bodyParser.json());
app.use('/books', createBook);
app.use('/writers', createWriter);

const db =  mongoose.connect('mongodb://0.0.0.0:27017', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected!');
});

app.listen(3010, () => {
  console.log('listening to port 3010');
});


