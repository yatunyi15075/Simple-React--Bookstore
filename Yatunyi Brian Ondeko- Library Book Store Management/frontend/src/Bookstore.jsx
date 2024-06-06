import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookstore = () => {
  const [mostExpensiveBook, setMostExpensiveBook] = useState(null);
  const [popularBooksByCity, setPopularBooksByCity] = useState([]);
  const [mostBoughtBook, setMostBoughtBook] = useState(null);
  const [leastPreferredBook, setLeastPreferredBook] = useState(null);

  useEffect(() => {
    getMostExpensiveBook();
    getPopularBooksByCity();
    getMostBoughtBook();
    getLeastPreferredBook();
  }, []);

  //get method for the most expensive book

  const getMostExpensiveBook = async () => {
    try {
      const response = await axios.get('/api/v1/books/most_expensive_book');
      setMostExpensiveBook(response.data);
    } catch (error) {
      console.error('Error fetching most expensive book:', error);
    }
  };

  //get method for the popular book by city

  const getPopularBooksByCity = async () => {
    try {
      const response = await axios.get('/api/v1/books/popular_books_by_city');
      setPopularBooksByCity(response.data);
    } catch (error) {
      console.error('Error fetching popular books by city:', error);
    }
  };

  //get method for the most bought book

  const getMostBoughtBook = async () => {
    try {
      const response = await axios.get('/api/v1/books/most_bought_book');
      setMostBoughtBook(response.data);
    } catch (error) {
      console.error('Error fetching most bought book:', error);
    }
  };

  //get method for the least prefferd book

  const getLeastPreferredBook = async () => {
    try {
      const response = await axios.get('/api/v1/books/least_preffered_book');
      setLeastPreferredBook(response.data);
    } catch (error) {
      console.error('Error fetching least preffered book:', error);
    }
  };


  return (
    <div>
      <h1>Bookstore </h1>
      <div>
        <h2>Most Expensive Book</h2>
        {mostExpensiveBook && (
          <div>
            <p>Book Name: {mostExpensiveBook.Book_Name}</p>
            <p>Publisher: {mostExpensiveBook.Publisher}</p>
            <p>Price: ${mostExpensiveBook.Price}</p>
          </div>
        )}
      </div>
      <div>
        <h2>Popular Books by City</h2>
        {popularBooksByCity && popularBooksByCity.map((book, index) => (
          <div key={index}>
            <p>City: {book.City}</p>
            <p>Book Name: {book.Book_Name}</p>
            <p>Max Sales: {book.Max_Sales}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Most Bought Book</h2>
        {mostBoughtBook && (
          <div>
            <p>Book Name: {mostBoughtBook.Book_Name}</p>
            <p>Publisher: {mostBoughtBook.Publisher}</p>
            <p>Sales: {mostBoughtBook.Sales}</p>
          </div>
        )}
      </div>
      
      <div>
        <h2>Least Preferred Book</h2>
        {leastPreferredBook && (
          <div>
            <p>Book Name: {leastPreferredBook.Book_Name}</p>
            <p>Publisher: {leastPreferredBook.Publisher}</p>
            <p>Sales: {leastPreferredBook.Sales}</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default Bookstore;