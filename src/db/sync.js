/**
 * @description  sequelize 同步数据库
 * @author 浩
 */

 const seq = require('./seq')

 //加载 Blog User 模型
 require('./model/index')
 
 seq.authenticate().then(() => {
     console.log('auth Ok')
 }).catch(() => {
     console.log('auth err')
 })
 
 //执行同步
 seq.sync({force:true}).then(() => {
     console.log('sync ok')
     process.exit()
 })