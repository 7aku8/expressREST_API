const User = require('../models/User');
const encrypt = require('bcrypt');
const responses = require('../utils/responseUtils');
const {
    response
} = require('express');
require('dotenv').config();


const register = (req, res) => {
    const newUser = {};

    newUser["username"] = req.body.username;
    newUser["password"] = encrypt.hashSync(req.body.password, process.env.SALT);

    console.log(newUser.password);

    User.create(newUser)
        .then((user) => {
            res.status(200).json({
                "success": true,
                "message": "User created successfully",
                "data": {
                    "user": user
                }
            })
            return;
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                "success": false,
                "message": "Error occured",
                "data": {}
            })
            return;
        })
};

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        where: {
            username: username
        }
    })

    if (user) {
        const result = await encrypt.compare(password, user.password);

        if (result) {

        } else {
            responses.failureUser(res, "Invalid password");
        }
    } else {
        responses.failureUser(res, "User with given username has not been found");
    }
};

module.exports = {
    register,
    login
};