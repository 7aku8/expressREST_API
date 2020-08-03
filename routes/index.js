const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Post = require('../models/Post');

// add new post
router.post('/', (req, res) => {
  Post.findAll()
    .then(posts => res.status(200).json({
      msg: posts
    }))
    .catch(err => res.status(401).json({
      msg: err
    }))
});

// edit existing post
router.put('/:id', (req, res) => {
  res.json({
    msg: "edit post"
  });
});

// show single post
router.get('/:id', (req, res) => {
  res.json({
    msg: "show single post"
  });
});

// show all posts
router.get('/', (req, res) => {
  res.json({
    msg: "show all posts"
  });
});

// delete single post
router.delete('/:id', (req, res) => {
  res.json({
    msg: "delete single post"
  });
});

// delete all posts
router.delete('/', (req, res) => {
  res.json({
    msg: "delete multiple posts"
  });
});

module.exports = router;