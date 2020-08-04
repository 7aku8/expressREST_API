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
    .then((post) => {
      res.status(200).json({
        "success": true,
        "message": "Post has been created succesfully",
        "data": {
          "post": post
        }
      })
    })
    .catch((err) => {
      res.status(400).json({
        "success": false,
        "message": err.errors[0].message,
        "status_code": 400,
        "data": {}
      })
    })
});

// update existing post
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const [
    key,
    value
  ] = Object.entries(req.body)[0];

  let updateValue = {};
  updateValue[key] = value;
  updateValue["updatedAt"] = null;

  Post.update(updateValue, {
      where: {
        id: id
      }

    }).then((post) => {
      res.status(200).json({
        "success": true,
        "message": "Post has been updated succesfully",
        "data": {
          "post": post
        }
      })
    })
    .catch((err) => {
      res.status(400).json({
        "success": false,
        "message": err.errors[0].message,
        "status_code": 400,
        "data": {}
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
        "success": true,
        "message": "Post has been found succesfully",
        "data": {
          "post": post
        }
      })
    })
    .catch((err) => {
      res.status(400).json({
        "success": false,
        "message": err.errors[0].message,
        "status_code": 400,
        "data": {}
      })
    })
});

// show all posts
router.get('/', (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.status(200).json({
        "success": true,
        "message": "Posts have been found succesfully",
        "data": {
          "posts": posts
        }
      })
    })
    .catch((err) => {
      res.status(400).json({
        "success": false,
        "message": err.errors[0].message,
        "status_code": 400,
        "data": {}
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
        "success": true,
        "message": "Post has been deleted succesfully",
        "data": {}
      })
    })
    .catch((err) => {
      res.status(400).json({
        "success": false,
        "message": err.errors[0].message,
        "status_code": 400,
        "data": {}
      })
    })
});

// delete all posts
router.delete('/', (req, res) => {
  Post.destroy({
      truncate: true
    }).then(() => {
      res.status(200).json({
        "success": true,
        "message": "Posts have been deleted succesfully",
        "data": {}
      })
    })
    .catch((err) => {
      res.status(400).json({
        "success": false,
        "message": err.errors[0].message,
        "status_code": 400,
        "data": {}
      })
    })
});

module.exports = router;