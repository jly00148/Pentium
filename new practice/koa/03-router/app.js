const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

//ctx：content上下文，包含request和response等信息
// 配制路由方式一:
router.get('/',async (ctx)=>{
    ctx.body="首页" ;
})

router.get('/news',async (ctx)=>{
    console.log('aaa')
    ctx.body="新闻页面"; //返回数据，相当于原生中的res.writeHead res.end()
    console.log('bbb')
})
// ------------------------------------------------------------------------------



// 配置路由方式二：


//     router.get('/', async (ctx)=>{
//         ctx.body="首页" ;
//     }).get('/news', async (ctx)=>{
//         ctx.body="新闻页面"; //返回数据，相当于原生中的res.writeHead res.end()
//     })

// router.get('/news',async (ctx)=>{
//     console.log('aaa')
//     ctx.body="新闻页面"; //返回数据，相当于原生中的res.writeHead res.end()
//     console.log('bbb')
// })

// -----------------------------------------------------------------------------

// 启动路由:
app
    .use(router.routes())//作用是启动路由
    .use(router.allowedMethods())//可写可不写，建议写。写在app.use(router.routers())之后，在所有中间件的后面调用
// 此时根据ctx.status设置response响应头


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
