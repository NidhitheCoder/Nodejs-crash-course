const jwt = require('jsonwebtoken');
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
    const { username, password } = req.body;

    // 3 ways to validate mongoose validation, Joi, check in the controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide username and password', 400)
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token Provided', 401)
    }

    const token = authHeader.split(' ')?.[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const luckyNumber = Math.floor(Math.random() * 100);

        res.status(200).json({ msg: `Hello ${decoded.username}...`, secret: `Your secret lucky number is ${luckyNumber}` })
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401)
    }

}

module.exports = {
    login, dashboard
}