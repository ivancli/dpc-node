var express = require('express');
var router = express.Router();

/* GET review page. */
router.get('/', function(req, res, next) {
  /*TODO change this*/
  res.render('review', { title: 'Review' });
});

module.exports = router;
