// console.log("Hello from Node js");

// const Person = require('./person');

// const person1 = new Person('Steve Smith',34);

// person1.greetings();

// // event module section
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log(`Called listener:`,data));

// logger.log('Hellow Word');

// logger.log("Hii");

// logger.log("There ?")

// http module section

const http = require("http");
const path = require("path");
const fs = require("fs");
// import fs from 'fs';

const server = http.createServer((req, res) => {
  // // console.log(req.url);
  // if (req.url === "/") {
  //   // read file with fs module
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // } else if (req.url === '/about') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, {"Content-type" : "text/html"});
  //       res.end(content);
  //     }
  //   )
  // } else if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Helen", age: 23 },
  //     { name: "Bob", age: 34 },
  //     { name:"Jesicca", age : 35 }
  //   ];
  //   res.writeHead(200, {'Content-type': 'application/json'});
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extName = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if (err.code === "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`server error ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, 'utf8');
    }

  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
