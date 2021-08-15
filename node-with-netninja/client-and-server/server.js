const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // // Lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(()=> {
    console.log('hello');
  });

  greet();
  greet();

  // // set content header type
  // res.setHeader('content-type', 'text/plain');

  // res.write('Hellow Ninjaz..');
  res.setHeader('content-type', 'text/html');

  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write('<p>Hellow ninjazz<p>');
  // res.write('<p>Hello again ninjaz</p>');
  // res.end();

  let path = './views/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send html file as response.
  // fs.readFile('./views/index.html', (err, data) => {
  fs.readFile(path, (err, data) =>{
    if(err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });

});

server.listen(5000, 'localhost', () => {
  console.log('Listening for request on port 5000');
});
