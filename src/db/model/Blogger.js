/**
 * @description 博主实体
 * @author 浩
 */
const seq = require('../seq')

const { INTEGER, STRING } = require('../type')

const Blogger = seq.define('blogger', {
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '昵称'
  },
  motto: {
      type: STRING,
      allowNull: false,
      comment: '座右铭'
  },
  articleNum: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0, 
      comment: '文章数'
  },
  classifyNum: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0, 
    comment: '分类'
  },
  tagNum: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0, 
    comment: '标签'
  }
})

module.exports = Blogger