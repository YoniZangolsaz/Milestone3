/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  nameOfBook: { type: String, required: true },
  descriptionOfBook: { type: String, required: true },
  datePublicOfBook: { type: String, required: true },
  // writerOfBook: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'writer'},
  numberOfPage: {type: Number, required: true },
}, {versionKey: false});

module.exports = mongoose.model('book', bookSchema);
