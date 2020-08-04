const response = require('../utils/responseUtils');

const validateEmptyValues = (req, res, next) => {
    console.log("asdgasdgasdg");
    if (!Object.entries(req.body).length) {
        return response.failure(res, 401, "No data given");
    }

    for ([key, value] of Object.entries(req.body)) {
        if (!value) {
            return response.failure(res, 401, `Value of ${key} can not be empty`);
        }
    }
    next();
}

const validateId = (req, res, next) => {
    const validId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(req.params.id);

    if (!validId) {
        return response.failure(res, 401, "Invalid post\'s ID given");
    } else {
        next();
    }
}

const validateArgsLength = (req, res, next) => {
    for ([key, value] of Object.entries(req.body)) {
        switch (key) {
            case "title":
                if (value.length > 100) {
                    return rresponse.failure(res, 401, "Too long title, max length is 100 characters");
                }
                break;
            case "lead":
                if (value.length > 100) {
                    return response.failure(res, 401, "Too long lead, max length is 100 characters");
                }
                break;
            case "content":
                if (value.length > 1000) {
                    return response.failure(res, 401, "Too long content, max length is 1000 characters");
                }
                break;
        }
    }
    next();
}

module.exports = {
    validateEmptyValues,
    validateId,
    validateArgsLength
}