/**
 * @description 博主模块
 * @author 浩
 */
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { getblogserve, addvisitedserve, addcallserve, getblogContentserve } = require('../services/blog')

/**
 * 获取博客列表
 * @param {number} size 页大小 
 * @param {number} page 第几页 
 */
async function getblog(size, page) {
  const res = await getblogserve({ size, page })
  return new SuccessModel(res)
}
/**
 * 访问量 +1
 * @param {number} blogId 博客id 
 */
async function addvisited(id) {
  const res = await addvisitedserve({ id })
  return new SuccessModel(res)
}

/**
 * 点赞量 +1
 * @param {number} id 博客id 
 */
async function addcall(id) {
  const res = await addcallserve({ id })
  return new SuccessModel(res)
}

/**
 * 获取博客内容
 * @param {number} blogId 博客id 
 */
async function getblogContent(id) {
  const res = await getblogContentserve({ id })
  return new SuccessModel(res)
}

module.exports = {
  getblog,
  addvisited,
  addcall,
  getblogContent
}