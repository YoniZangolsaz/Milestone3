/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const router = express.Router();
const Book = require('../models/createBook');

// Get all books
router.get('/', async (req:any, res:any) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a book
router.post('/', async (req:any, res:any) => {
  const {
    nameOfBook, descriptionOfBook, dateBublicOfBook, writerOfBook, numberOfPage,
  } = req.body;
  const book = new Book({
    nameOfBook: req.body.nameOfBook,
    descriptionOfBook: req.body.descriptionOfBook,
    dateBublicOfBook: req.body.dateBublicOfBook,
    writerOfBook: req.body.writerOfBook,
    numberOfPage: req.body.numberOfPage,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Spesific book
router.get('/:bookId', async (req:any, res:any) => {
  try {
    const book = await Book.findById(req.params.bookId);
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete book
router.delete('/:bookId', async (req:any, res:any) => {
  try {
    const removedBook = await Book.remove({ _id: req.params.bookId });
    res.json(removedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a book
router.patch('/:bookId', async (req:any, res:any) => {
  try {
    const updatedBook = await Book.updateAll(
      { _id: req.params.bookId },
      { $set: { nameOfBook: req.body.nameOfBook } },
    );
    res.json(updatedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
