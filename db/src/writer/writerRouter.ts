/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/newline-after-import */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express1 = require('express');
const router1 = express1.Router();
const Writer = require('./writerModel');

// Get all writers
router1.get('/', async (req:any, res:any) => {
  try {
    const writers = await Writer.find();
    res.json(writers);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit a writer
router1.post('/', async (req:any, res:any) => {
  const {
    firstName, lastName, yearOfBirth, listOfBook
  } = req.body;
  const writer = new Writer({
    firstName,
    lastName,
    yearOfBirth,
    listOfBook
  });
  try {
    const savedWriter = await writer.save();
    res.json(savedWriter);
  } catch (err) {
    res.json({ message: err });
  }
});

// Spesific writer
router1.get('/:writerId', async (req:any, res:any) => {
  try {
    const writer = await Writer.findById(req.params.writerId);
    res.json(writer);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete writer
router1.delete('/:writerId', async (req:any, res:any) => {
  try {
    const removedWriter = await Writer.remove({ _id: req.params.writerId });
    res.json(removedWriter);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a writer
router1.patch('/:writerId', async (req:any, res:any) => {
  try {
    const updatedWriter = await Writer.updateOne(
      { _id: req.params.writerId },
      { $set: { firstName: req.body.firstName } },
    );
    res.json(updatedWriter);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router1;
