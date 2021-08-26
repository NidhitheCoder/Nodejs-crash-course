const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// mongodb connections
const dbURI = "mongodb+srv://admin:<password>@cluster0.xglsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(5000))
.catch((err) => console.log(err));

// register view engine 
app.set('view engine', 'ejs');

// // app.set('views', 'myviews');

// // listen for requests
// app.listen(5000);

// third party middleware.

app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (res, req) => {
  const blog = new Blog({
    title: 'Blog one',
    snippet: 'This is blog one',
    body: 'Blog one body'
  });

  blog.save()
    .then((result) => {
      res.setEncoding(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('idstring')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

// app.use(morgan('tiny'));

// Middlewares
app.use((req, res, next) => {
  console.log("New request made");
  console.log('Host ', req.hostname);
  console.log('Path ', req.path);
  console.log('method', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('In the next middleware.')
  next
});


// middleware with static files

app.use(express.static('public'));

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
