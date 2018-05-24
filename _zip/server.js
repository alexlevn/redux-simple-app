'use strict'

var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen(3000, ()=>{
    console.log('Server is listening on port', 3000);
})