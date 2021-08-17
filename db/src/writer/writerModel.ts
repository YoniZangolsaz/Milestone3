/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from 'mongoose'

const writerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  yearOfBirth: { type: Number, required: true },
  listOfBook: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'book' }]
}, { versionKey: false });

export default mongoose.model('writer', writerSchema);
