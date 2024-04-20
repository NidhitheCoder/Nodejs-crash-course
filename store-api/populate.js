require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./product.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success...!');
        process.exit(0); // Stop the terminal after successful execution
    } catch (error) {
        console.log(error);
        process.exit(1) // Code 1 means end the process with some failure
    }
}

start();