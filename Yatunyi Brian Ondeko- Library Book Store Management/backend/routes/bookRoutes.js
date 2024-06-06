import express from "express";
import { getMostExpensiveBook, getPopularBooksByCity, getMostBoughtBook, getLeastPreferredBook } 
from "../controllers/bookController.js";

const router = express.Router();

router.get('/most_expensive_book', getMostExpensiveBook);
router.get('/popular_books_by_city', getPopularBooksByCity);
router.get('/most_bought_book', getMostBoughtBook);
router.get('/least_preferred_book', getLeastPreferredBook);

export default router;