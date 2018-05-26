var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

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
      throw err;
    };
    res.json(books);
  })

});

// END APIs

app.listen(3006, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3006');
})