//getting acces to the necessary service
const bcrypt = require('bcrypt');
//determines how long it takes to decode or "calculate" each hash, essentially add security 
const SALT_ROUNDS = 10;

//adding the salt-rounds or encryption to the password or "payload"
function hashPassword(payload) {
    return bcrypt.hash(payload, SALT_ROUNDS);
}

//checks the payload against the hashed password for verification
function checkPassword(payload, hashedPassword) {
    return bcrypt.compare(payload, hashedPassword);
}

module.exports = { hashPassword, checkPassword };