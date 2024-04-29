const Product = require('../models/product');

const operatorMap = {
    '>': '$gt',
    '>=': '$gte',
    '<': '$lt',
    '<=': '$lte',
    '=': '$eq'
}

const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    // const products = await Product.find({ featured: true }); // default way

    // const products = await Product.find({}).sort('-name price'); // sort with -name and price
    const products = await Product.find({ price: { $gt: 500 } }).select('name price').sort('price')
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const { company, featured, search, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    if (featured) queryObject.featured = featured === 'true';
    if (company) queryObject.company = { $regex: company, $options: 'i' };
    if (search) queryObject.name = { $regex: search, $options: 'i' };

    // Filter using numeric conditions
    if (numericFilters) {
        const conditionRegex = /\b(<|>|<=|>=|=)\b/g;
        let filters = numericFilters.replace(conditionRegex, (match) => `-${operatorMap[match]}-`);

        const options = ['price', 'rating'];

        filters = filters.split(',').forEach(item => {
            const [field, operator, value] = item.split('-');

            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }

        });
        console.log(queryObject)

    }


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
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    const products = await result;

    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}