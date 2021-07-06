const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

// 引入koa-views
const views = require('koa-views')


// 配置模板引擎,第三方中间件：
// 方式一：(备注：模板的后缀名是ejs)
app.use(views('views',{extension:'ejs'}))
// ------------------------------------------------------

// 方式二：(备注：模板的后缀名是html)
// app.use(views('views',{map:{html:'ejs'}}))
// ------------------------------------------------------

router.get('/',async (ctx)=>{
    await ctx.render('index',{
        title:'标题',
        list:[
            '11','22','33'
        ],
        content:`<h1>大标题<h1>`,
        num:24
    })
})

// ------------------------------------------------------

// 染公共数据放到ctx.state，放入中间件里
// ctx.state = {
//     session:this.session,
//     title:"app",
//     userInfo:'张三'
// }

app.use(async (ctx,next)=>{
    ctx.state.userInfo = 'zs'
   await next()
})

// ------------------------------------------------------


// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
