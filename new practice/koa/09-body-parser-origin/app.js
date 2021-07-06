const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()
const views = require('koa-views')
const getData = require('./common/common.js')

app.use(views('views',{extension:'ejs'}))

router.get('/',async (ctx)=>{
    await ctx.render('index')
})


// --------------------------------------
// 原生post请求后台获取数据
router.post('/add',async (ctx)=>{
   await getData(ctx)
    .then(result=>{
        console.log(result)
        // console.log('result::',result) username=123&password=456
    })
    .catch(err=>{
        console.log(err)
    })

    await ctx.render('add')
})

// --------------------------------------

// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
