
require('babel-core/register')({
  "presets": ["es2015", "react", "stage-1"]
});

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

// PROXY
var httpProxy = require('http-proxy');

var requestHandler = require('./requestHandler');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(logger('dev')); // need it during develpment to look all routes request

// PROXY TO API 
const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:3006'
});

app.use('/api', function (req, res) {
  apiProxy.web(req, res);
});
// END PROXY

app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// });

app.set('view engine', 'ejs');
app.use(requestHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;