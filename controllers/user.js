var db      = require('../models/db'),
    comm    = require('./common/common.js');

exports.register = function(req, res) {
    var data = {
        //name: req.body.name,
        password: comm.aes(req.body.password),
        //time: new Date().getTime()
    };
    var connect = db.connect();
    connect.query("INSERT INTO t_user set ? ", data, function(err, rows) {
        if(err) {
            console.log("Error Is %s", err);
        }
    });

    console.log(comm.aes('test'));
}

exports.test = function(req, res) {
    console.log('test test in user.js');
}
