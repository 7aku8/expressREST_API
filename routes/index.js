const express = require('express');
const postsActions = require('../controller/postsActions');
const router = express.Router();

const validation = require('../middleware/validation');


// add new post
router.post('/', [validation.validateEmptyValues, validation.validateArgsLength], (req, res) => {
  postsActions.createPost(req, res);
});


// update existing post
router.patch('/:id', [validation.validateId, validation.validateEmptyValues, validation.validateArgsLength], (req, res) => {
  postsActions.editPost(req, res);
});

// show single post
router.get('/:id', validation.validateId, (req, res) => {
  postsActions.showSinglePost(req, res);
});

// show all posts
router.get('/', (req, res) => {
  postsActions.showAllPosts(req, res);
});

// delete single post
router.delete('/:id', validation.validateId, (req, res) => {
  postsActions.deleteSinglePost(req, res);
});

// delete all posts
router.delete('/', (req, res) => {
  postsActions.deleteAllPosts(req, res);
});

module.exports = router;