import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import bookstoreRoutes from './routes/bookstoreRoutes.js';

const app = express();
const port = 3001;

app.use(bodyParser.json());

//including the details for our sql

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'bookstore'
});

// for conecting with our database

connection.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Using the the bookstore routes

app.use('/api', bookstoreRoutes);

//listening to our port

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
