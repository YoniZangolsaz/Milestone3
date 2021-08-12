import { Mongoose } from "mongoose";
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    nameOfBook: {type: String, required: true},
    description: {type: String, required: true},
    datePublicBook: {type: Number, required: true},
    writerBook: {type: String, required: true},
    numberOfPages: {type: Number, required: true}
});

module.exports = mongoose.model('Book', bookSchema);