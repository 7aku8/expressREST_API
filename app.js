const createError = require('http-errors');
const express = require('express');
const path = require('path');
const auth = require('./middleware/authenticateToken');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const Post = require('./models/Post');
const actions = require('./utils/responseUtils');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/api/posts', auth.authenticateToken, indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(req.method);
  // render the error page
  res.status(err.status || 500);
  console.log(err);
  actions.failure(res, 500, "Server error");
});


module.exports = app;