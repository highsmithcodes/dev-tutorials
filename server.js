const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const posts = require('./db-api.json');

const corsOptions = {
    origin: 'https://www.devweight.com', // Replace '*' with the appropriate domain of your React application
    methods: 'GET',
    allowedHeaders: 'Content-Type',
  };
  
app.use(cors(corsOptions));
// app.use(cors()); // Enable CORS for all routes
app.get('/', (req, res) => {
    res.send('API is running');
  });

app.get('/api/posts', (req, res) => {
    console.log(posts)
  res.json(posts);
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});