import express from 'express';
const app = express();
const mongoose = require('mongoose');

const booksRouts:any = require('../api/routes/books');
const authorRouts:any = require('../api/routes/author');

mongoose.connect(`mongodb://0.0.0.0:27017`, {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected!');   
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello world!!!'
    })
});

// app.use('/books', booksRouts);
// app.use('/author', authorRouts);
// module.exports = app;
