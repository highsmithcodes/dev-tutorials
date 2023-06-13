const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const posts = require('./db-api.json');

app.use(cors()); // Enable CORS for all routes

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});