var crypto  = require('crypto');

/*******************************************
 *          生成uuid                      *
 ******************************************/

/**
 *  生成n + m 位的随机16进制字符串
 *  n默认为5, m为当前时间的16进制表示
 *  @return 默认(n + m) 位字符串
 */

exports.uuid = function(n) {
    
    var n = n || 5,
        baseStr = createBaseStr(n),
        now = new Date().getTime();
    
    return baseStr + now.toString(16);
}

/**
 * 生成用于产生uuid的baseStr
 * @param   {number}: n 生成的n位的16进制字符串
 * @return  n位16进制字符串
 * @date    07 Feb. 2015
 * @author  Polande
 */

function createBaseStr(n) {
    var baseStr = '';
    for(var i = 0; i < n; i++) {
       baseStr += Math.floor(Math.random() * 16).toString(16);
    }
    return baseStr;
}

// 加密算法 采用AES加密

exports.aes = function(s) {
    var key = 'tAs.JIa+Mi-KeY@Polande',
        cipher = crypto.createCipher('aes-256-cbc', key),
        crypted = cipher.update(s, 'utf-8', 'hex');

    crypted += cipher.final('hex');

    return crypted;
}
