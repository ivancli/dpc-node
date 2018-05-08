var express = require('express');
var router = express.Router();

require('dotenv').config();
var fs = require('fs');
var join = require('path').join;
var config = require('../config');
var mongoose = require('mongoose');
var models = join(__dirname, '../app/models');

// Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(join(models, file)));

/**
 *
 * @returns {*}
 */
function connect() {
    let options = {keepAlive: 1};
    mongoose.connect(config.db.connection_string, options)
    return mongoose.connection;
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/clipper', function (req, res, next) {
    connect()
        .on('error', console.log)
        .on('disconnected', connect)
        .once('open', () => {
            let Clipper = mongoose.model('Clipper');
            Clipper.list({
                callback(err, list) {
                    res.send(list);
                }
            });
        });
});

module.exports = router;
