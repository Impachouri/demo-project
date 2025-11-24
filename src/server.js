
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is the About Page</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
