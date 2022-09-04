const router = require('koa-router')()
const { getblogger } = require('../controller/blogger')
router.prefix('/blogger')

router.get('/getblogger', async (ctx, next) => {

  ctx.body = await getblogger()
})
module.exports = router