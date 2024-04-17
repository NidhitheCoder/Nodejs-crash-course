const getAllProductStatic = async (req, res) => {
    // throw new Error('testing async errors package') // We can trow errors like this with async-errors package
    res.status(200).json({ msg: 'Product testing route' })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'Products routes' })
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}