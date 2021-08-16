/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    nameOfBook: { type: String, required: true },
    descriptionOfBook: { type: String, required: true },
    datePublicOfBook: { type: String, required: true },
    writerOfBook: { type: String, required: true },
    numberOfPage: { type: Number, required: true },
}, { versionKey: false });
module.exports = mongoose.model('books', bookSchema);
//# sourceMappingURL=createBook.js.map