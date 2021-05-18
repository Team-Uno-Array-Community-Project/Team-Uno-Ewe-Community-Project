const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;


function hashPassword(payload) {
    return bcrypt.hash(payload, SALT_ROUNDS);
}

function checkPassword(payload, hashedPassword) {
    console.log(payload, hashedPassword);
    return bcrypt.compare(payload, hashedPassword);
}

module.exports = { hashPassword, checkPassword };