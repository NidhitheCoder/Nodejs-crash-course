const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    // const products = await Product.find({ featured: true }); // default way

    // const products = await Product.find({}).sort('-name price'); // sort with -name and price
    const products = await Product.find({}).select('name price')
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    console.log(req.query);
    const { company, featured, search, sort, fields } = req.query;
    const queryObject = {};

    if (featured) queryObject.featured = featured === 'true';
    if (company) queryObject.company = { $regex: company, $options: 'i' };
    if (search) queryObject.name = { $regex: search, $options: 'i' };

    const selectFieldsString = fields.toString().replace(',', ' ')
    console.log(selectFieldsString)
    let products = await Product.find(queryObject).select(selectFieldsString);

    if (sort) {
        products = products.sort(sort);
    }

    res.status(200).json(products)
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}