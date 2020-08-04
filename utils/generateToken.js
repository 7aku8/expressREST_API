const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccessToken = (username) => {
    console.log('token token');
    console.log(username);
    console.log(process.env.TOKEN_SECRET);
    return jwt.sign(username, process.env.TOKEN_SECRET);
}

module.exports = {
    generateAccessToken
}