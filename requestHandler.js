'use strict'

import axios from 'axios';

function handleRender(req, res) {
    axios.get('http://localhost:3006/books')
        .then(function (res) {
            var myHTML = JSON.stringify(res.data);
            res.render('index', { myHTML });
        })
        .catch(function (err) {
            console.log('#Initial Server-side rendering error:', err);
        })
}

module.exports = handleRender;