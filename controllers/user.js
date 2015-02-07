var db      = require('../models/db'),
    uuid    = require('./common/uuid.js');

exports.register = function(req, res) {
    console.log(req);
    res.send(uuid.uuid());
}

exports.test = function(req, res) {
    console.log('test test in user.js');
}
