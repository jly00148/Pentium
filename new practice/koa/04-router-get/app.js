const Koa = require('koa')
const router = require('koa-router')() //引入路由
const app = new Koa()

router.get('/',async (ctx)=>{
// 获取get传值：两只方式

// 第一种query方式：(备:前端URL：http://127.0.0.1:3000/?name=jly&age=18)
    //ctx.query = ctx.request.query
    console.log(ctx.query) //获取的对象：{ name: 'jly', age: '18' }

// 第二种querystring方式：
    //ctx.query = ctx.request.querystring
    console.log(ctx.querystring) //获取的字符串：name=jly&age=18

    ctx.body="首页" ;
})

router.get('/news',async (ctx)=>{
    console.log('aaa')
    ctx.body="新闻页面";
    console.log('bbb')
})


// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())


// 监听
app.listen(3001,()=>{
    console.log('启动成功')
})
