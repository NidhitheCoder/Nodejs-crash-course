# Nodejs

- Nodejs is a javascript runtime(not a language or a framework).
- Build on the V8 Javascript engine (same a google chrome). It is written in c++
- Essentially allows us to run Javascript code on the server.

## Why use node
- Fast, efficient and highly scallable.
- It is event driven and non blocking I/O model.
- Node is more popular in the industry.
- Same language on the front-end and back-end(JS).

## What is non-blocking I/O
- Works on a single thread using non-blocking I/O calls.
- Support tens of thousands concurrent memory.
- Optimises thoughput & scalability in app with many I/O operations.
- All of this makes nodejs App very fast & efficient.

## Node Package Manager(NPM)

- NPM used to install 3rd party packages or modules(frameworks , libraries,tools,etc..). 
- Packages get stored in the "node modules" folder.
- All dependencies  are listed in a "package.json" file.
- NPM scripts can be created to run certian tasks such as run server.

- To install node : npm install node.
- To install nodemon : npm install -D nodemon.
- "npm init" create package.json.
- To run a node js file: "node <filename.js>".

### path module
- Path module provides utilities for working with file and directory paths. it can be accessed using:-

    ```
    const path = require('path');
    
    ```

    || Referance : https://nodejs.org/dist/latest-v15.x/docs/api/path.html