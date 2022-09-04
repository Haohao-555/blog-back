const { Blogger } = require('../db/model/index')

// 获取博主信息
async function getUserInfo() {
  const result = await Blogger.findOne({
    attributes:[
      'nickName',
      'motto',
      'articleNum',
      'classifyNum',
      'tagNum'
    ]
  })
  return result
}
module.exports = {
  getUserInfo
}