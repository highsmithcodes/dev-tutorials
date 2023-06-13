const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const posts = require(path.join(__dirname, 'db-api.json'));

const corsOptions = {
  origin: 'https://www.devweight.com',
  methods: 'GET',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/posts', (req, res) => {
  console.log(posts);
  res.json(posts);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});