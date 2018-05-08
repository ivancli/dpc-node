'use strict';

/**
 * Module dependencies.
 */

const path = require('path');

const development = require('./env/development');
const test = require('./env/test');
const production = require('./env/production');

const db = require('./db');

const defaults = {
    root: path.join(__dirname, '..'),
    db,
};

/**
 * Expose
 */

module.exports = {
    development: Object.assign({}, development, defaults),
    test: Object.assign({}, test, defaults),
    production: Object.assign({}, production, defaults)
}[process.env.NODE_ENV || 'development'];
