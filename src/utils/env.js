/**
 * @description 环境配置
 * @author 浩
 */

 const ENV = process.env.NODE_ENV

 module.exports = {
     isDev: ENV == 'dev',
     noDev: ENV !== 'dev',
     isProd: ENV == 'production',
     noProd: ENV !== 'production',
     isTest: ENV == 'test',
     noTest: ENV !== 'test'
 }