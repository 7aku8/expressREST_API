var express = require('express');
var router = express.Router();

// add new post
router.post('/', (req, res) => {
  res.json({
    msg: "add new post"
  });
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