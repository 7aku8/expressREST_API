const responses = require('../utils/responseUtils');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        responses.failureUser(res, 403, "Log in first");
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return responses.failureUser(res, 403, "Authorization error");
        req.user = user;
        next();
    })
}

module.exports = {
    authenticateToken
}