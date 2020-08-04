var express = require('express');
var usersActions = require('../controller/usersActions');

var router = express.Router();


router.post('/register', (req, res) => {
  usersActions.register(req, res);
});

router.post('/login', (req, res) => {
  usersActions.login(req, res);
});


module.exports = router;