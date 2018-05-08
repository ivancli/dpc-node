var express = require('express');
var router = express.Router();

/* GET retrieve page. */
router.get('/', function (req, res, next) {
    /*TODO change this*/
    res.render('retrieve', {title: 'Retrieve'});
});

module.exports = router;
