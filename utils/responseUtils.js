const {
    RSA_NO_PADDING
} = require("constants");

const success = (res, message, posts) => {
    res.status(200).json({
        "success": true,
        "message": message,
        "data": {
            "posts": posts
        }
    })
    return;
};

const failure = (res, status_code, message) => {
    res.status(status_code).json({
        "success": false,
        "message": message,
        "status_code": status_code,
        "data": {}
    })
    return;
};

const successUser = (res, token, message) => {
    res.status(200).json({
        "success": true,
        "message": "You are logged in",
        "token": token,
    })
    return;
}

const failureUser = (res, message) => {
    res.status(401).json({
        "success": false,
        "message": message
    })
    return;
}


module.exports = {
    success,
    failure,
    successUser,
    failureUser
};