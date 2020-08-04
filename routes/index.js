const express = require('express');
const router = express.Router();
const postsActions = require('../controller/postsActions');


// add new post
router.post('/', (req, res) => {
  postsActions.createPost(req, res);
});


// update existing post
router.patch('/:id', (req, res) => {
  postsActions.editPost(req, res);
});

// show single post
router.get('/:id', (req, res) => {
  postsActions.showSinglePost(req, res);
});

// show all posts
router.get('/', (req, res) => {
  postsActions.showAllPosts(req, res);
});

// delete single post
router.delete('/:id', (req, res) => {
  postsActions.deleteSinglePost(req, res);
});

// delete all posts
router.delete('/', (req, res) => {
  postsActions.deleteAllPosts(req, res);
});

module.exports = router;