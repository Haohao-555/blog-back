const { Blog } = require('../db/model/index')
const fs = require('fs')
const path = require('path')
const { marked } = require('marked')

// 获取博客列表
async function getblogserve({ size = 4, page = 0 }) {
  const result = await Blog.findAndCountAll({
    limit: size,
    offset: size * page,
    order: [
      ['createdAt', "desc"]
    ],
    attributes: [
      "id",
      "title",
      "introduction",
      "classify",
      "tag",
      "createdAt",
      "visitNum",
      "callNum"
    ]
  })

  let blogList = result.rows.map(row => row.dataValues)
  return {
    count: result.count,
    blogList
  }
}

// 获取博客内容
async function getblogContentserve({ id }) {
  let p = process.cwd().split("\\")
  p.pop()
  const ARTICLEPATH = p.join("\\")

  const res = await Blog.findOne({
    attributes: [
      "content"
    ],
    where: {
      id,
    }
  })
  currentPath = res.dataValues.content
  let content = fs.readFileSync(path.join(ARTICLEPATH, currentPath), 'utf-8')
  content = marked(content)
  return {
    content,
  }
}

// 观看量+1
async function addvisitedserve({ id }) {

}
// 点赞量+1
async function addcallserve({ id }) {

}

module.exports = {
  getblogserve,
  addvisitedserve,
  addcallserve,
  getblogContentserve
}