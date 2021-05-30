# Node js with express 

# Express
- Express is a fast, unopenionated and minimalist web framework for nodejs.
- Express is a serverside or backend framework. It is not comparable with clientside frameworks like React, Angular and Vue. It can be used in combination with those frameworks to build fullstack applications.
- Understanding of javascript basics is very helpful for quick learning of express nodejs.
- We can send response as different types of items like, json, string,variables, files, html templates, template engines etc..

## Why we use express ?
- Makes build web applications with node js is much easier.
- Used for both server rendered app as well ass API/Microservices.
- Extremley light, fast, and free.
- Full control of request and response.
- By far the most popular node framework.
- Great to use with client side frameworks as it's all javascript.

## Basic server syntax
  ```
    const express = require('express');

    // Init express
    const app = express();

    // Create your endpoints/ route handlers
    app.get('/', function(req,res) {
      res.send('Hello world');
    });

    // Listen on a port
    app.listen(5000);
  ```

## Middlewares
- Middleware functions are functions that have access to the request and response object. Express has build in middleware but middleware also comes from 3rd party packages as well as custom  middleware.

- Capability of middlewares
  - Execute any code.
  - Make changes to the reqest/response object.
  - End response cycle.
  - Call next middleware in the stack.

## Nodemon
- nodemon help us to avoid resetting server everytime.

- 