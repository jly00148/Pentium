const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

// 错误处理中间件：任何路由匹配都会最先经过中间件,只要返回数据ctx.status 就会等于200，当匹配不到路由时，就会匹配到中间件
app.use(async (ctx,next)=>{

    // console.log(ctx.status) 先进过中间件ctx.status = 404
    await next()

    // 前端匹配路由错误
    if(ctx.status == 404){

        ctx.body = '404 匹配路由错误...'
    }else{
        // 能够匹配到路由
        console.log(ctx.url)
    }
})

router.get('/',async (ctx)=>{

    ctx.body="首页" ;

})
// 142563
// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
