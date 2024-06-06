import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Book_Name: {
    type: String,
    required: true
  },
  Publisher: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    required: true
  },
  Edition: {
    type: Number,
    required: true
  },
  Number_of_Pages: {
    type: Number,
    required: true
  },
  Sales: {
    type: Number,
    required: true
  },
  City: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  }
});

export const Book = mongoose.model('Book', bookSchema);

