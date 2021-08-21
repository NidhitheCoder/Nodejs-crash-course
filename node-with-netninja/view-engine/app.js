const express = require('express');

// express app
const app = express();

// register view engine 
app.set('view engine', 'ejs');

// // app.set('views', 'myviews');

// listen for requests
app.listen(5000);

// Middlewares
app.use((req, res) => {
  console.log("New request made");
  console.log('Host ', req.hostname);
  console.log('Path ', req.path);
  console.log('method', req.method);
})

app.get('/', (req, res) => {

  const blogs = [
    { title: "Blog 1", snippet: "Sample snippet 1" },
    { title: "Blog 2", snippet: "Sample snippet 2" },
    { title: "Blog 3", snippet: "Sample snippet 3" },
    { title: "Blog 4", snippet: "Sample snippet 4" }
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create New Blog' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
