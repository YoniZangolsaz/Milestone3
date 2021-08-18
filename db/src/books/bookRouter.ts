/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import Book from './bookModel';
import {Ibook} from '../interface/book.interface'
const router = express.Router();

// Get all books
router.get('/', async (req:any, res:any) => {
  try {
    const books:Ibook = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a book
router.post('/', async (req, res) => {
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
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Spesific book by name of book
router.get('/name/:nameOfBook', async (req:any, res:any) => {
  try {
    const book:Ibook = await Book.find({nameOfBook: {$regex:req.params.nameOfBook}})
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// Spesific book by description of book
router.get('/description/:descriptionOfBook', async (req:any, res:any) => {
  try {
    const book:Ibook = await Book.find({descriptionOfBook: {$regex:req.params.descriptionOfBook}})
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

//Show books that have at least 250 pages 
router.get('/pages/250', async (req:any, res:any) => {
  try {
    const book:Ibook = await Book.find({numberOfPage: { $gte: 250 }}).sort({numberOfPage: 1});
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
  
});

// Delete book
router.delete('/:bookId', async (req:any, res:any) => {
  try {
    const removedBook:Ibook = await Book.remove({ _id: req.params.bookId });
    res.json(removedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a book
router.patch('/:bookId', async (req:any, res:any) => {
  try {
    const updatedBook:Ibook = await Book.updateMany(
      { _id: req.params.bookId },
      { $set: { nameOfBook: req.body.nameOfBook } },
    );
    res.json(updatedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;


