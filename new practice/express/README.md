# `express使用说明`：

### `定义`：express是基于nodejs的WEB开发框架。

### `基本写法`：
const express = require('express');
const app = express();

app.use(express.static('public')); 静态资源请求，默认返回public文件下的index.html

app.get('/',(res,req)=>{
    res.send('xxx...');
}) //引入下面的文件模块后写法为：↓

app.use('/user',usermodel)

app.listen(3000,()=>{
    console.log('connect successful...');
})

----------------------------------------------------------------------------------

const usermodel = require('routee/usermodel.js'); //上面的文件↑引入此模块。
//多个路由请求可使用express.Router()方法:

const express = require('express);
const roter = express.Router()

router.get('/',(req,res)=>{
    res.send('xxx...');
})

module.exports = router;

---------------------------------------------------------------------------------

### `模板引擎`：npm i swig

1.设置缓存：
// 开发阶段不走缓存
swig.setDefaults({
    cache:false //开发阶段设置false，上线阶段设置true
})

2.配制应用模板：
app.engine('html',swig.renderFile); // 前者参数html是模板引擎名称，同时也是文件的扩展名，后者是解析模板的方法

3.配制模板文件存放目录：
app.set('views','./views') //前者参数必需写，后者是配制模板文件存放文件夹。

4.注册模板引擎：
app.set('view engine','html') //前者参数必需是view engine，后者参数是模板名称，同上。

5.渲染：
app.get('/',(req,res)=>{
    //渲染模板
    //第一个参数是模板目录文件
    //第二个参数是传递给模板的数据
    res.render('index',{ // 请求'/',去views文件下去找index.html,并将index.html并且将页面返给前台
        title:'xxx',
        content:'xxx'
    })
})

app.get('/list',(req,res)=>{
    //渲染模板
    //第一个参数是模板目录文件
    //第二个参数是传递给模板的数据
    res.render('list',{ // 请求'/list',去views文件下去找index.html,list.html并且将页面返给前台
        title:'xxx',
        content:'xxx'
    })
})

### `中间件`：
定义：中间件其实就是一个函数，在收到请求和返回响应之间处理一些操作，这个函数可以访问请求对象req，响应对象res；
express常用中间件：body-parser;
写法：app.use(bodyParser.urlencoded({ extended:false })); app.use(bodyParser.json()) //要写在请求前