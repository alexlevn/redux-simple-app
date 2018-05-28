var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('responde with a resouce');
});

module.exports = router;