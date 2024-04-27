const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    // const products = await Product.find({ featured: true }); // default way

    // const products = await Product.find({}).sort('-name price'); // sort with -name and price
    const products = await Product.find({}).select('name price').limit(2).skip(2)
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    console.log(req.query);
    const { company, featured, search, sort, fields } = req.query;
    const queryObject = {};

    if (featured) queryObject.featured = featured === 'true';
    if (company) queryObject.company = { $regex: company, $options: 'i' };
    if (search) queryObject.name = { $regex: search, $options: 'i' };


    let result = Product.find(queryObject);
    // Sort
    if (sort) {
        const sortList = sort.split(',').join(' ').trim();
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    // Select fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ').trim();
        result = result.select(fieldsList)
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req, query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    const products = await result;

    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}