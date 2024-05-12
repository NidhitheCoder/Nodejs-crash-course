const login = async (req, res) => {
    res.send('Fake login router');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({ msg: 'Hello Jack', secret: ` your secret is ${req.name}. and your lucky number is ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}