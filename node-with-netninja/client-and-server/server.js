const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set content header type
  // res.setHeader('content-type', 'text/plain');
  // res.write('Hellow Ninjaz..');
  res.setHeader('content-type', 'text/html');

  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<p>Hellow ninjazz<p>');
  res.write('<p>Hello again ninjaz</p>');
  res.end();
});

server.listen(5000, 'localhost', () => {
  console.log('Listening for request on port 5000');
});
