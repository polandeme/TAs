//var db      = require('../models/db'),
  //  User    = {}; 

exports.register = function(req, res) {
    res.send('index Elll');
}

exports.index = function(req, res) {
    res.render('index', {title: 'user index'});
}
/*module.exports = {
    register: User.register
}*/
exports.test = function(req, res) {
    console.log('test test in user.js');
}
