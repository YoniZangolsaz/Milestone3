var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const router = express.Router();
const Book = require('../models/createBook');
// Get all books
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        res.json(books);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Submit a book
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { nameOfBook, descriptionOfBook, dateBublicOfBook, writerOfBook, numberOfPage, } = req.body;
    const book = new Book({
        nameOfBook: req.body.nameOfBook,
        descriptionOfBook: req.body.descriptionOfBook,
        dateBublicOfBook: req.body.dateBublicOfBook,
        writerOfBook: req.body.writerOfBook,
        numberOfPage: req.body.numberOfPage,
    });
    try {
        const savedBook = yield book.save();
        res.json(savedBook);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Spesific book
router.get('/:bookId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const book = yield Book.findById(req.params.bookId);
        res.json(book);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Delete book
router.delete('/:bookId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const removedBook = yield Book.remove({ _id: req.params.bookId });
        res.json(removedBook);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
// Update a book
router.patch('/:bookId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const updatedBook = yield Book.update({ _id: req.params.bookId }, { $set: { nameOfBook: req.body.nameOfBook } }, { $set: { descriptionOfBook: req.body.descriptionOfBook } });
        res.json(updatedBook);
    }
    catch (err) {
        res.json({ message: err });
    }
}));
module.exports = router;
//# sourceMappingURL=createBook.js.map