var user = require('./user');
exports.index = function(req, res) {
    res.render('index', {title: 'Elll'});
}

exports.register = function(req, res) {
    res.render('index', {title: 'index register'});
}
exports.user = user;
