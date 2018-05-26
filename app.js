var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// APIs

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');
// If there is no db, it will create one. 


var Books = require('./models/books.js');

// POST BOOKS ---------
app.post('/books', function (req, res) {
  var book = req.body;

  // Mongoose method post
  Books.create(book, function (err, books) {
    if (err) {
      throw err;
    }

    // console.log("--- Get book from POST Method:", book);
    res.json(books);
  })
});

//  GET BOOKS -------------
app.get('/books', function (req, res) {
  Books.find(function (err, books) {
    if (err) {
      throw err;
    };

    res.json(books);
  })
})

// DELETE A BOOKS --------------
app.delete('/books/:_id', function (req, res) {
  var query = { _id: req.params._id };

  Books.remove(query, function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

// UPDATE A BOOKS
app.put('/books/:_id', function (req, res) {
  var book = req.body;
  var query = { _id: req.params._id };

  console.log("--- Update new book & this is info:", book);

  var update = {
    '$set': {
      "title": book.title,
      "description": book.description,
      "image": book.image,
      price: book.price
    }
  };

  // when true returns the updated document

  var options = { new: true };

  Books.findOneAndUpdate(query, update, options, function (err, books) {
    if (err) {
      // console.log('----- getting err');
      throw err;
    };
    // console.log('----- update successfully!');
    res.json(books);
  })

});

// END APIs

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


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