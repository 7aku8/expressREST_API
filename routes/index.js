const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Post = require('../models/Post');
const uuid = require('uuid');

// add new post
router.post('/', (req, res) => {
  const {
    title,
    lead,
    content
  } = req.body;

  let status = 401;
  let message = ``;

  Post.create({
      id: uuid.v4(),
      title: title,
      lead: lead,
      content: content,
    })
    .then(() => {
      status = 200;
      message = `Post created succesfully`;

      res.status(status).json({
        msg: message
      });
    })
    .catch((err) => {
      status = 401;
      message = `Error: ${err}`;

      res.status(status).json({
        msg: message
      });
    })

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