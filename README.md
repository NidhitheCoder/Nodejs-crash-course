# Nodejs
#  with the help of Traversy media youtube crash course : https://www.youtube.com/watch?v=fBNz5xF-Kx4

- Nodejs is a javascript runtime(not a language or a framework).
- Nodejs run as a service inside a mechine.
- Build on the V8 Javascript engine (same a google chrome). It is written in c++
- Essentially allows us to run Javascript code on the server.

## Why use node
- Fast, efficient and highly scallable.
- It is event driven and non blocking I/O model.
- Node is more popular in the industry.
- Same language on the front-end and back-end(JS).
- It is better to use anything that not CPU intensive.

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
    - npm init : generate a package.json gile
    - npm install express : install a package locally.
    - npm install -g nodemon : install a package globally. 
    - use node keyword to terminal helps you to run js in machine.
- package.json helps to store all the dependencies.

### path module
- Path module provides utilities for working with file and directory paths. it can be accessed using:-

    ```
    const path = require('path');
    
    ```

    || Referance : https://nodejs.org/dist/latest-v15.x/docs/api/path.html

### File System module(fs)
 - The fs module enables interacting with file system in a way modeled n standerd POSIX funcitons.
- To use this module:

    ```
    const fs = require('fs');
    
    ```
### OS module
- This module return or gives us to information about environment or operating system.
- To use this module:

    ```
    const os = require('os');
    
    ```

### url module
- This module works with url's.
- To use this module:

    ```
    const url = require('url');
    
    ```

### Events
- Every action in computer is an event.
- Objects in node js can fire events, like readStream object fires events when opening and clossing a file.
- nodejs has a buid in module, called events , where you can create ,fire, and listen for your own events.
- To use this module:
    ```
    const events = require('events');
    
    ```
### http module
- The http module allows nodejs to transfer data over the Hyper Text Transfer Protocol(HTTP).
- To use this module:

    ```
    const http = require('http');
    ```
- http module can create an http server that listens to server ports and gives a response back to the client.