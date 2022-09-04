/**
 * @description sequeline 实例
 * @author 浩
 */

 const Sequeline = require('sequelize')
 const { MYSQL_CONF } = require('../conf/db')
 const { isProd, isTest } = require('../utils/env')
 
 
 const { host, user, password, database } = MYSQL_CONF;
 const conf = {
     host,
     dialect: 'mysql'
 }
 
 //进行单元测试的时候不会输出sql语句
 if (isTest) {
     conf.logging = () =>{
 
     }
 }
 
 //线上环境，使用连接池
 if (isProd) {
     conf.pool = {
         max:5,
         min:0,
         idle:10000
     }
 }
 const seq = new Sequeline(database, user, password, conf)
 
 module.exports = seq