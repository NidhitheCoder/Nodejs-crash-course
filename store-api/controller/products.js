const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    const products = await Product.find({ featured: true });
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    console.log(req.query)
    const products = await Product.find(req.query);

    res.status(200).json(products)
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}