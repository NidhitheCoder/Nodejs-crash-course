const { response } = require('express');
const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(5000);

app.get('/', () => {
  response.send('<p>Home page</p>');
});