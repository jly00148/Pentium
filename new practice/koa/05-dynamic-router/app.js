const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

router.get('/news/:aid',async (ctx)=>{
    // 动态路由：URL：http://localhost:3001/news/123
    console.log(ctx.params) //{ aid: '123' }
    ctx.body="首页" ;

// ----------------------------------------
})

// 多个
router.get('/news/:aid/:cid',async (ctx)=>{
    // 动态路由：URL：http://localhost:3001/news/123/456
    console.log(ctx.params) //{ aid: '123', cid: '456' }
    ctx.body="首页" ;

// ----------------------------------------
})


// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
