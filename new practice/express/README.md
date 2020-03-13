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
