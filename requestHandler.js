'use strict';

var axios = require('axios'); // Fix by require babel..
// import axios from 'axios'


function handleRender(req, res) {
    axios.get('http://localhost:3006/books')
        .then(function (response) {
            var myHTML = JSON.stringify(response.data);
            // myHTML = {
            //     books: [],
            //     carts: {}
            // };
            res.render('index', { myHTML });
        })
        .catch(function (err) {
            console.log('#Initial Server-side rendering error:', err);
        });
};

module.exports = handleRender;