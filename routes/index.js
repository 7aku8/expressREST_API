const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Post = require('../models/Post');
const uuid = require('uuid');

// add new post
router.post('/', (req, res) => {
  const newPost = {
    id: uuid.v4(),
    title: req.body.title,
    lead: req.body.lead,
    content: req.body.content
  }

  Post.create(newPost)
    .then(() => {
      res.status(200).json({
        "msg": "Post has been created succesfully"
      })
    })
    .catch((err) => {
      res.status(401).json({
        "msg": `Error: Database problem occured, status code: ${err.status}`
      })
    })
});

// edit existing post
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const [
    key,
    value
  ] = Object.entries(req.body)[0];

  Post.update({
      where: {
        id: id
      },
      key: value
    }).then(() => {
      res.status(200).json({
        "msg": "Post has been updated successfully"
      })
    })
    .catch((err) => {
      res.status(401).json({
        "msg": `Error: Something went wrong, status code: ${err.status}`
      })
    })
});

// show single post
router.get('/:id', (req, res) => {
  const id = req.params.id;

  Post.findOne({
      where: {
        id: id
      }
    })
    .then((post) => {
      res.status(200).json({
        "msg": post
      })
    })
    .catch((err) => {
      res.status(401).json({
        "msg": `Post with hiven id has not been found, status code ${err.code}`
      })
    })
});

// show all posts
router.get('/', (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.status(200).json({
        "msg": posts
      })
    })
    .catch((err) => {
      res.status(401).json({
        "msg": `Posts have not been found, status code ${err.code}`
      })
    })
});

// delete single post
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Post.destroy({
      where: {
        id: id
      }
    }).then(() => {
      res.status(200).json({
        "msg": "Post has been deleted succesfully"
      })
    })
    .catch((err) => {
      res.status(401).json({
        "msg": `Error: Invalid post's id, status code ${err.status}`
      })
    })
});

// delete all posts
router.delete('/', (req, res) => {
  Post.destroy({
      truncate: true
    }).then(() => {
      res.status(200).json({
        "msg": "Posts have been deleted succesfully"
      })
    })
    .catch((err) => {
      res.status(401).json({
        "msg": `Error: Unable to delete all posts ${err.status}`
      })
    })
});

module.exports = router;