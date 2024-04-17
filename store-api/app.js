require('dotenv').config();
// async errors
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send('<h1>Store API</h1> <a href="api/v1/products" >Product Details</a>'))
app.use('/api/v1/products', productRouter)

// Product routes


app.use(notFoundMiddleware);
app.use(errorMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start();