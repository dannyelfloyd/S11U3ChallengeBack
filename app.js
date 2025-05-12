const express = require('express');
const app = express();
const PORT = 3000;

const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send(`
    <a href="/users">users</a>
    <a href="/books">books</a>
    `)
});

app.get('/users', async (req, res) => {
   try {
        const response = await axios.get('https://api-books-ac3j.onrender.com/users');
        const users = response.data;
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje:'users not found'});
    };
});
app.get('/books', async (req, res) => {
    try {
        const response = await axios.get('https://api-books-ac3j.onrender.com/books');
        const books = response.data;
        res.json(books);
    } catch (error) {
        console.log(error)
        res.status(404).json({mensaje:'users not found'})
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});

// node app.js