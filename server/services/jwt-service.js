//getting acces to the necessary service
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
//verifies the "token" with the security key "process.env.TOKEN_KEY" which is a set key saved in a local-only env file
function verifyToken(token) {
    return jwt.verify(token, process.env.TOKEN_KEY);
}
//creates the token using the .env key
function createToken(payload) {
    return jwt.sign(payload, process.env.TOKEN_KEY);
}

module.exports = { verifyToken, tokenMiddleware, createToken };