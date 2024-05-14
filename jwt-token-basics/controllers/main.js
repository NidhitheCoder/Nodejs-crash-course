const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    // 3 ways to validate mongo, Joi, check in the controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide username and password', 400)
    }
    res.send('Fake login router');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({ msg: `Hello ${req.query.name || 'User'}...`, secret: `Your secret lucky number is ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}