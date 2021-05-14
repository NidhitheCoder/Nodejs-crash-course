const http = require('http');

// create serve object
http.createServer((req,res) => {
  // write response
  res.write("Hellow world");
  res.end();
}).listen(5000,() => console.log("Server running..."));