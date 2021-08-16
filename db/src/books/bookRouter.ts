/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const router = express.Router();
const Book = require('./bookModel');

// Get all books
router.get('/', async (req:any, res:any) => {
  try {
    const books:String = await Book.find().populate('writerOfBook');
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a book
router.post('/', async (req:any, res:any) => {
  const {
    nameOfBook, descriptionOfBook, datePublicOfBook, writerOfBook, numberOfPage,
  } = req.body;
  const book = new Book({
    nameOfBook,
    descriptionOfBook,
    datePublicOfBook,
    writerOfBook,
    numberOfPage,
  });
  try {
    const savedBook:String = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Spesific writer
router.get('/name/:nameOfWriter._id', async (req:any, res:any) => {
  try {
    const book:String = await Book.find({numberOfPage:req.params.nameOfWriter._id});
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
  
});

// Delete book
router.delete('/:bookId', async (req:any, res:any) => {
  try {
    const removedBook:String = await Book.remove({ _id: req.params.bookId });
    res.json(removedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Spesific book
router.get('/id/:bookId', async (req:any, res:any) => {
  try {
    const book:String = await Book.findById(req.params.bookId).populate('writerOfBook');
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a book
router.patch('/:bookId', async (req:any, res:any) => {
  try {
    const updatedBook:String = await Book.updateAll(
      { _id: req.params.bookId },
      { $set: { nameOfBook: req.body.nameOfBook } },
    );
    res.json(updatedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;


