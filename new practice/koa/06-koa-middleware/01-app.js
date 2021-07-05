const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

// 一、应用级中间件：能够匹配任何路由，如果不调用next就不会往下匹配
app.use(async (ctx,next)=>{
    ctx.body='这是一个应用中间件'
    next()
})

router.get('/',async (ctx)=>{
    ctx.body="首页" ;
})

// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
