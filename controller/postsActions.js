const db = require("../config/db");
const Post = require("../models/Post");
const uuid = require("uuid");
const response = require("../utils/responseUtils");

const createPost = (req, res) => {
  const newPost = {
    id: uuid.v4(),
    title: req.body.title,
    lead: req.body.lead,
    content: req.body.content,
  };

  Post.create(newPost)
    .then((post) => {
      response.success(res, "Post has been created successfully", post);
    })
    .catch((err) => {
      response.failure(res, 401, err.errors[0].message);
    });
};

const editPost = (req, res) => {
  const id = req.params.id;

  let updateValue = {};

  for (const [key, value] of Object.entries(req.body)) {
    updateValue[key] = value;
  }
  updateValue["updatedAt"] = null;

  Post.update(updateValue, {
    where: {
      id: id,
    },
  })
    .then((post) => {
      response.success(res, "Post has been updated successfully", post);
    })
    .catch((err) => {
      response.failure(res, 401, err.errors[0].message);
    });
};

const showSinglePost = (req, res) => {
  const id = req.params.id;

  Post.findOne({
    where: {
      id: id,
    },
  })
    .then((post) => {
      response.success(res, "Post has been found successfully", post);
    })
    .catch((err) => {
      response.failure(res, 401, err.errors[0].message);
    });
};

const showAllPosts = (req, res) => {
  Post.findAll()
    .then((posts) => {
      response.success(res, "Posts have been found succesfully", posts);
    })
    .catch((err) => {
      response.failure(res, 401, err.errors[0].message);
    });
};

const deleteSinglePost = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      response.success(res, "Post have been deleted successfully");
    })
    .catch((err) => {
      response.failure(res, 401, err.errors[0].message);
    });
};

const deleteAllPosts = (req, res) => {
  Post.destroy({
    truncate: true,
  })
    .then(() => {
      response.success(res, "Posts have been deleted successfully");
    })
    .catch((err) => {
      response.failure(res, 401, err.errors[0].message);
    });
};

module.exports = {
  createPost,
  editPost,
  showSinglePost,
  showAllPosts,
  deleteSinglePost,
  deleteAllPosts,
};
