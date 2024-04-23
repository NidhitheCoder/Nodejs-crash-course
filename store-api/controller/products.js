const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    // const products = await Product.find({ featured: true }); // default way

    const products = await Product.find({}).sort('-name price'); // sort with -name and price
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    console.log(req.query);
    const { company, featured, search, sort } = req.query;
    const queryObject = {};

    if (featured) queryObject.featured = featured === 'true';
    if (company) queryObject.company = { $regex: company, $options: 'i' };
    if (search) queryObject.name = { $regex: search, $options: 'i' };


    let products = await Product.find(queryObject);

    if (sort) {
        products = products.sort(sort);
    }

    res.status(200).json(products)
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}