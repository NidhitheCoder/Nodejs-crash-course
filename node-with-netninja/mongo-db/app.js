const express = require('express');
require('dotenv').config({path: __dirname + '/.env'})
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();
const username = process.env.USERNAME;
const password = process.env.PASSWROD;

// mongodb connections
const dbURI = `mongodb+srv://${username}:${password}@cluster0.xglsn.mongodb.net/Cluster0?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
  console.log("heiii")
  app.listen(5000)
})
.catch((err) => console.log(err));

// register view engine 
app.set('view engine', 'ejs');

// // app.set('views', 'myviews');

// // listen for requests
// app.listen(5000);

// third party middleware.

app.use(morgan('dev'));

// middleware with static files

app.use(express.static('public'));

app.get('/', (req, res) => {

  // const blogs = [
  //   { title: "Blog 1", snippet: "Sample snippet 1" },
  //   { title: "Blog 2", snippet: "Sample snippet 2" },
  //   { title: "Blog 3", snippet: "Sample snippet 3" },
  //   { title: "Blog 4", snippet: "Sample snippet 4" }
  // ];
  // res.render('index', { title: 'Home', blogs });

  res.redirect('/blogs');
});

// app.use(morgan('tiny'));

// Middlewares
app.use((req, res, next) => {
  console.log("New request made");
  console.log('Host ', req.hostname);
  console.log('Path ', req.path);
  console.log('method', req.method);
  next();
});


// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'Blog two',
    snippet: 'This is blog two',
    body: 'Blog two body'
  });

  blog.save()
    .then((result) => {
      res.send(result);
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
  Blog.findById('6128e993899a370aa0d4caa5')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

app.use((req, res, next) => {
  console.log('In the next middleware.')
  next();
});


app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((blogs) => {
      res.render('index', {title: 'All Blogs', blogs})
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create New Blog' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
