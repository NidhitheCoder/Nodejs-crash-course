const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request made');
});

server.listen(5000, 'localhost', () => {
  console.log('Listening for request on port 3000');
});
