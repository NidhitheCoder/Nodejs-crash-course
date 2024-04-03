const getAllProductStatic = async (req, res) => {
    res.status(200).json({ msg: 'Product testing route' })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'Products routes' })
}

module.exports = {
    getAllProducts,
    getAllProductStatic
}