const Koa = require('koa')
const app = new Koa()

// koa中间件（执行顺序是洋葱模型），每个接口都是中间件，中间件都是异步的
// 执行到next的时候会去调用下一个中间件，下一个中间件执行完毕后再执行上一个中间件的next下面的代码

// ctx：上下文 next：是调用下一个中间件的方法
app.use(async(ctx,next)=>{
    console.log(1)
    await next()
    console.log(2)

})

app.use(async(ctx,next)=>{
    console.log(3)
    await next()
    console.log(4)

})

app.listen(3000)
console.log('启动成功')