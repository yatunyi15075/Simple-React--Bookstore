import { Book } from "../models/bookModel.js";

export const getMostExpensiveBook = async (req, res, next) => {
  try {
    const mostExpensiveBook = await Book.findOne().sort('-Price');
    res.status(200).json(mostExpensiveBook);
  } catch (error) {
    next(error);
  }
};

export const getPopularBooksByCity = async (req, res, next) => {
  try {
    const popularBooksByCity = await Book.aggregate([
      { $group: { _id: "$City", book: { $push: "$$ROOT" } } },
      { $project: { City: "$_id", books: "$book" } },
      { $unwind: "$books" },
      { $sort: { "books.Sales": -1 } },
      { $group: { _id: "$City", books: { $push: "$books" } } }
    ]);
    res.status(200).json(popularBooksByCity);
  } catch (error) {
    next(error);  
  }
};