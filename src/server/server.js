const express = require('express');
const app = express();
const posts = require('../db.json');

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});