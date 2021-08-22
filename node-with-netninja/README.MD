- In Browser V8 engine compiles Javascript into mechine code.

## What is node js
- Node js is a program written in C++ and that runs v8 engine.
- Node convert javasscript to machine code with the help of V8 engine.
- Node allow read and write files on a computer.
- Connect to database.
- Act as a server for content.

## Why use Node js
- No need to learn an extra language to server.
- Can share code between back-end and front-end.
- Node has a massive community behind it.
- Huge amount of third party packages and tools for help.

### The Global Object
- We can call functions or methods of a Global object directly inside the browser.

### streams 
- Start using data, before it has finished loading.
- Small packets of data called as buffer.
- read and write streams.

### IP addresses
- IP addresses are the unique address for every client/computer-system connected to the internet.

### localhost
- Local host is like a domain name on the web.
- Localhost takes us to a very specific IP Address called loopback IP address.
- A port number represents a specific channel gatway or port on our computer.

### Status Code
- Status codes describe  the type of response sent to the browser.
- eg:
    200 - Ok.
    301 - Resource removed.
    404 - Not found.
    500 - Internal server error.
- 100 range - Informational responses.
- 200 range - Success codes.
- 300 range - Codes for redirects.
- 400 range - User or client error codes.
- 500 range - Server error codes.

## NPM(Node Package Manager)


### Nodemon
- Nodemon is a package which helps to create alive reload server.
- How to install nodemon - `npm install -g nodemon` (-g indicates we install nodeman globally).
- `npm init` helps to create package.json file.
- package.json - file is keep track of our project dependencies.

### How to install express
- npm install express

## EJS
- EJS or Embedded Javascript Templeting is a templating engine used by Node.js. Template engine helps to create an HTML template with minimal code. Also it can inject data into html template at the client side and produce the final HTML.

## Middleware
- Code which runs(on the server) between getting a request  and sending a response.
- Use method is generally used for middleware code.
- We can create one or more middleware. And middleware runs top to bottom.

### examples of middleware
- Logger middleware to log details of every request.
- Authontication check middleware for protected routes.
- Middleware  to  parse JSON data from requests.
- Return 404 pages

### Using next()
We have to explicitly tell that we can move to the next step.