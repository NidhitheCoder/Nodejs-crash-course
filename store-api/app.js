require('dotenv').config();
// async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json())

// Roots
app.get('/', (req, res) => res.send('<h1>Store API</h1> <a href="api/v1/products" >Product Details</a>'))

app.use(notFoundMiddleware);
app.use(errorMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connect DB
        app.listen(port, console.log(`Server is listening ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();