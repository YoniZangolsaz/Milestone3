/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  nameOfBook: { type: String, required: true },
  descriptionOfBook: { type: String, required: true },
  datePublicOfBook: { type: Number, required: true },
  numberOfPage: {type: Number, required: true },
}, {versionKey: false});

export default mongoose.model('book', bookSchema);
