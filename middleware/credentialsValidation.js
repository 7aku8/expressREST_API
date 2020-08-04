const validate = require('validator');
const responses = require('../utils/responseUtils');


const validateCredentials = (req, res, next) => {
    if (Object.entries(req.body).length !== 2) {
        return responses.failureUser(res, 401, "Username and password is required");
    }

    const {
        username,
        password
    } = req.body;

    if (validate.isEmpty(username) || username.length > 100) {
        return responses.failureUser(res, 401, "Username is too long or empty");
    }
    if (validate.isEmpty(password) || password.length > 100) {
        return responses.failureUser(res, 401, "Password is too long or empty");
    }
    if (password.length < 9) {
        return responses.failureUser(res, 401, "Password is too short");
    }

    next();
}

module.exports = {
    validateCredentials
}