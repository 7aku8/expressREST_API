const User = require('../models/User');
const encrypt = require('bcrypt');
const responses = require('../utils/responseUtils');
const token = require('../utils/generateToken');

require('dotenv').config();


const register = async (req, res) => {
    const newUser = {};

    newUser["username"] = req.body.username;
    newUser["password"] = encrypt.hashSync(req.body.password, process.env.SALT);

    const sameUsers = await User.findAndCountAll({
        where: {
            username: newUser.username
        }
    });

    if (sameUsers.count) {
        return responses.failureUser(res, 401, "Username is already taken");
    }

    User.create(newUser)
        .then((user) => {
            return res.status(200).json({
                "success": true,
                "message": "User created successfully",
                "data": {
                    "user": user
                }
            })
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                "success": false,
                "message": "Error occured",
                "data": {}
            })
        })
};

const login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const user = await User.findOne({
        where: {
            username: username
        }
    })

    if (user) {
        const result = await encrypt.compare(password, user.password);

        if (result) {
            return responses.successUser(res, token.generateAccessToken(username));
        } else {
            return responses.failureUser(res, "Invalid password");
        }
    } else {
        return responses.failureUser(res, "User with given username has not been found");
    }
};

module.exports = {
    register,
    login
};