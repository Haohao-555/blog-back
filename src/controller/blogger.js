/**
 * @description 博主模块
 * @author 浩
 */
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { getUserInfo } = require('../services/blogger')
async function getblogger() {
   const res = await getUserInfo()
   return new SuccessModel(res)
}
module.exports = {
  getblogger
}