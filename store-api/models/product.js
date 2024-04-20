const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product Name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    productType: {
        type: String,
        enum: {
            values: ['Electronics', 'Home Appliances', 'Clothes', 'Scandals'],
            message: '${VALUE} is not supported, Supported values are Electronics, Home Appliances, Clothes, Scandals'
        }
        // enum: ['Electronics', 'Home Appliances', 'Clothes', 'Scandals']
    },
    company: {
        type: String,
        required: [true, 'Product company must be provided']
    }
});

module.exports = mongoose.model('products', productSchema);