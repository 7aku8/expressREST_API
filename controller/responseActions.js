const success = (res, message, posts) => {
    res.status(200).json({
        "success": true,
        "message": message,
        "data": {
            "posts": posts
        }
    })
};

const failure = (res, status_code, message) => {
    res.status(status_code).json({
        "success": false,
        "message": message,
        "status_code": status_code,
        "data": {}
    })
};


module.exports = {
    success,
    failure
};