const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set content header type
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
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
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
