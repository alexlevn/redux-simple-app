
/* --- This API will run on: http://localhost:3006/  --- */

var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error:'));

// ------------ Set up SESSIONS ------------
app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 2 }, // 2 days in milliseconds
  store: new MongoStore({ mongooseConnection: db, ttl: 2 * 24 * 60 * 60 })
  // ttl: 2 days * 24 hours * 60 minutes * 60 seconds
}))

// SAVE TO SESSION CART API
app.post('/cart', function (req, res) {
  var cart = req.body;
  req.session.cart = cart;

  // Waiting for saving. When finish => response json to client.
  req.session.save(function (err) {
    if (err) {
      throw err;
    }
    res.json(req.session.cart);
  });

})

// GET SESSION CART API
app.get('/cart', function (req, res) {
  if (typeof req.session.cart !== 'undefined') {
    res.json(req.session.cart);
  }
});

// ------------ END Set up SESSIONS ------------

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

// --------- GET BOOKS IMAGES API ------------
app.get('/images', function (req, res) {
  const imgFolder = __dirname + '/public/images';
  // REQUIRE FILE SYSTEM
  const fs = require('fs');
  fs.readdir(imgFolder, function (err, files) {
    if (err) {
      return console.log(err);
    }

    // CREATE AN EMPTY ARRAY
    const fileArr = [];

    // ITERATE ALL IMAGES IN THE DIRECTORY AND ADD TO THE ARRAY
    files.forEach(function (file) {
      fileArr.push({ name: file });
    });

    res.json(fileArr);
  })
})

// END APIs

app.listen(3006, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3006');
})