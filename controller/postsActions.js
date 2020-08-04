const db = require('../config/db');
const Post = require('../models/Post');
const uuid = require('uuid');
const response = require('./responseActions');


// create new post
const createPost = (req, res) => {
    const newPost = {
        id: uuid.v4(),
        title: req.body.title,
        lead: req.body.lead,
        content: req.body.content
    };

    Post.create(newPost)
        .then((post) => {
            response.success(
                res,
                "Post has been created successfully",
                post
            );
        })
        .catch((err) => {
            response.failure(res, err.errors[0].message);
        })
};


// edit existing post
const editPost = (req, res) => {
    const id = req.params.id;

    const [key, value] = Object.entries(req.body)[0];

    let updateValue = {};
    updateValue[key] = value;
    updateValue["updatedAt"] = null;

    Post.update(updateValue, {
        where: {
            id: id
        }
    }).then((post) => {
        response.success(
            res,
            "Post has been updated successfully",
            post
        )
    }).catch((err) => {
        response.failure(res, err.errors[0].message);
    })
};


// show single post
const showSinglePost = (req, res) => {
    const id = req.params.id;

    Post.findOne({
        where: {
            id: id
        }
    }).then((post) => {
        response.success(
            res,
            "Post has been found successfully",
            post
        );
    }).catch((err) => {
        response.failure(res, err.errors[0].message);
    })
};


// show all posts
const showAllPosts = (req, res) => {
    Post.findAll()
        .then((posts) => {
            response.success(
                res,
                "Posts have been found succesfully",
                posts
            );
        }).catch((err) => {
            response.failure(res, err.errors[0].message);
        });
};


// delete single post
const deleteSinglePost = (req, res) => {
    const id = req.params.id;

    Post.destroy({
        where: {
            id: id
        }
    }).then(() => {
        response.success(
            res,
            "Post have been deleted successfully"
        );
    }).catch((err) => {
        response.failure(res, err.errors[0].message);
    });
};


// delete all posts
const deleteAllPosts = (req, res) => {
    Post.destroy({
            truncate: true
        })
        .then(() => {
            response.success(
                res,
                "Posts have been deleted successfully"
            );
        }).catch((err) => {
            response.failure(res, err.errors[0].message);
        });
};


module.exports = {
    createPost,
    editPost,
    showSinglePost,
    showAllPosts,
    deleteSinglePost,
    deleteAllPosts
}