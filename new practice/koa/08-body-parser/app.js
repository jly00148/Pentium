const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
// const getData = require('./common/common.js')

app.use(views('views',{extension:'ejs'}))
// 用koa-bodyparser中间件
/*
    1.cnpm i koa-bodyparser
    2.引入：const bodyParser = require('koa-bodyparser')
    3.app.use(bodyParser())
    4.获取post请求数据：ctx.request.body
 */

app.use(bodyParser())

router.get('/',async (ctx)=>{
    await ctx.render('index')
})


// --------------------------------------

router.post('/add',async (ctx)=>{
    ctx.body = ctx.request.body
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
