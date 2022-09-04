/**
 * @description 存储配置
 * @author 浩
 */
const { isProd } = require('../utils/env')

let MYSQL_CONF = {
    host: '39.104.61.32',
    user: 'root',
    password: 'Huang123!',
    port: '3306',
    database: 'blog_back'
}

if (isProd) {

    MYSQL_CONF = {
        //线上配置 mysql
        host: '39.104.61.32',
        user: 'root',
        password: 'Huang123!',
        port: '3306',
        database: 'blog_back'
    }
}
module.exports = {
    MYSQL_CONF
}