const db = require('../config/db');
const Post = require('../models/Post');
const uuid = require('uuid');


let newPost = (title, lead, content) => {
    console.log(title);
    Post.create({
            id: uuid.v4(),
            title: title,
            lead: lead,
            content: content,
        })
        .then(() => {
            return [200, `New post created succesfully`]
        })
        .catch((err) => {
            return [401, `Error: ${err}`]
        })
};

module.exports = newPost();