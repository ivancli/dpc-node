'use strict';

module.exports = {
    connection_string: 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_DATABASE,
};
