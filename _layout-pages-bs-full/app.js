
var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();
app.use(logger('dev')); // need it during development

// NOT YET
// PROXY
// var httpProxy = require('http-proxy');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const apiProxy= httpProxy.createProxyServer({
//     target: 'http://localhost:3008'
// });

// app.use('/api', function(req,res){
//     apiProxy.web(req,res);
// })

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Catch error:
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;