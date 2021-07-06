const Koa = require('koa')
const router = require('koa-router')() //引入路由
const path = require('path')
const app = new Koa()
const render = require('koa-art-template')

// 模板引擎koa-art-template
/*
    1.cnpm i art-template koa-art-template
    2.引入：const render = require('koa-art-template')
    3.配制模板引擎：
    render(app,{
        root:path.join(__dirname,'view') //视图的位置
        extname:'html', //后缀名
        debug:process.env.NODE_ENV !== 'production'//是否开启调试模式
    })
 */
    render(app,{
        root:path.join(__dirname,'views'),//视图的位置
        extname:'.html',//后缀名
        debug:process.env.NODE_ENV !== 'production'//是否开启调试模式
    })

router.get('/',async (ctx)=>{
    await ctx.render('index')
})

// 模板语法和ejs相同

// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
