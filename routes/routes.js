var controllers = require('../controllers');

/**
 * 全局路由
 * @param   app: express
 * @date    05 Feb. 2015
 * @author  Polande
 */

module.exports = function(app) {
    app.get('/', controllers.home.index);
    app.post('/api/user/register', controllers.user.register);
}
