/**
 * @description 博客实体
 * @author 浩
 */
const seq = require('../seq')

const { INTEGER, STRING } = require('../type')

const Blog = seq.define('blog', {
  title: {
    type: STRING,
    allowNull: false,
    comment: '标题'
  },
  introduction: {
      type: STRING,
      allowNull: false,
      comment: '简介'
  },
  content: {
    type: STRING,
    allowNull: false,
    comment: '内容地址'
  },
  classify: {
    type: STRING,
    allowNull: false, 
    comment: '分类'
  },
  tag: {
    type: STRING,
    allowNull: false,
    defaultValue: 0, 
    comment: '标签'
  },
  visitNum: {
    type: STRING,
    defaultValue: 0, 
    comment: '访问量'
  },
  callNum: {
    type: STRING,
    defaultValue: 0, 
    comment: '点赞量'
  },
})

module.exports = Blog