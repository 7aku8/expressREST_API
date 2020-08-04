const success = (res, message, posts) => {
    res.status(200).json({
        "success": true,
        "message": message,
        "data": {
            "posts": posts
        }
    })
};

const failure = (res, message) => {
    res.status(400).json({
        "success": false,
        "message": message,
        "status_code": 400,
        "data": {}
    })
};


module.exports = {
    success,
    failure
};