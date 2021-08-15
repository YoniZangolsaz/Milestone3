/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const createSchema = mongoose.Schema({
    nameOfBook: { type: String, required: true },
    descriptionOfBook: { type: String, required: true },
    dateBublicOfBook: { type: String, required: true },
    writerOfBook: { type: String, required: true },
    numberOfPage: { type: Number, required: true },
});
module.exports = mongoose.model('books', createSchema);
//# sourceMappingURL=createBook.js.map