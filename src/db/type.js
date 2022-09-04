/**
 * @description 封装数据类型
 * @author 浩
 */

 const Sequelize = require('sequelize')

 module.exports = {
     STRING: Sequelize.STRING,
     DECIMAL:Sequelize.DECIMAL,
     TEXT:Sequelize.TEXT,
     INTEGER:Sequelize.INTEGER,
     BOOLEAN:Sequelize.BOOLEAN,
 }