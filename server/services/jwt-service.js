const jwt = require('jsonwebtoken');

const tokenMiddleware = (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        req.token = header.split(' ')[1];
        next();
    }else{
        res.status(401).send("you are Unauthorized for this page!");
    }
}

function verifyToken(token) {
    return jwt.verify(token, process.env.TOKEN_KEY);
}

function createToken(payload) {
    return jwt.sign(payload, process.env.TOKEN_KEY);
}

module.exports = { verifyToken, tokenMiddleware, createToken };