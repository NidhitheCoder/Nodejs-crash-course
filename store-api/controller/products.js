const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    const products = await Product.find({ featured: true });
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    console.log(req.query);
    const { company, featured, search } = req.query;
    const queryObject = {};

    if (featured) queryObject.featured = featured === 'true';
    if (company) queryObject.company = { $regex: company, $options: 'i' };
    if (search) queryObject.name = { $regex: search, $options: 'i' };


    const products = await Product.find(queryObject);

    res.status(200).json(products)
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}