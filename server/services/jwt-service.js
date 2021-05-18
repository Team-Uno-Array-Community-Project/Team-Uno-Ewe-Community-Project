const jwt = require('jsonwebtoken');

const tokenMiddleware = (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        req.token = header.split(' ')[1];
        next();
    }else{
        res.status(401).send("you are Unauthorized for this page!");
    }
}//need to re export in module. exports 14if uncommented

function verifyToken(token) {
    return jwt.verify(token, process.env.TOKEN_KEY);
}
// function verifyToken(req, res, next) {
//     // get auth header value
//     const bearerHeader = req.headers['authorization'];
//     //check if bearer is undefined
//     if (typeof bearerHeader !== "undefined") {
//         //split at the space
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         //set the token
//         req.token = bearerToken;
//         //next middleware
//         next();

//     } else {
//         res.sendStatus(403).send('you are not yarnie enough for the yarn club');
//     }

// }
function createToken(payload) {
    console.log(payload);
    return jwt.sign(payload, process.env.TOKEN_KEY);
}

module.exports = { verifyToken, tokenMiddleware, createToken };