const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

// 路由级别中间件：例如有相同路由时，默认匹配从上往下匹配到路由，之后调用next继续向下匹配

router.get('/',async (ctx,next)=>{
    // ctx.body="首页" ;
    console.log('首页')
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
