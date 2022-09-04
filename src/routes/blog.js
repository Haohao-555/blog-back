const router = require('koa-router')()
const { getblog, addvisited, addcall, getblogContent } = require('../controller/blog')
router.prefix('/blog')

// 获取博客列表
router.get('/getblog', async (ctx, next) => {
  const { size, page } = ctx.request.query
  ctx.body = await getblog(size, page)
})

router.get('/getblogContent', async (ctx, next) => {
  const { id } = ctx.request.query
  ctx.body = await getblogContent(id)
})
// 访问量加一
router.post('/addvisited', async (ctx, next) => {
  const { id } = ctx.request.body
  ctx.body = await addvisited(id)
})

// 点赞量加一
router.post('/addcall', async (ctx, next) => {
  const { id } = ctx.request.body
  ctx.body = await addcall({ id })
})


module.exports = router