var express = require('express');
var router = express.Router();

/* GET allocate page. */
router.get('/', function(req, res, next) {
  /*TODO change this*/
  res.render('allocate', { title: 'Allocate' });
});

module.exports = router;
