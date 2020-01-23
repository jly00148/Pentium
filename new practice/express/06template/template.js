const express = require('express');
const swig = require('swig');

const port =3000;
const app = express();


//开发阶段设置不走缓存
swig.setDefaults({
    cache:false
})

//配制应用模板
app.engine('html',swig.renderFile);//html是模板名称，也是模板文件的扩展名。swig.renderFile,解析模板的方法

//配制模板的存放目录
app.set('views','./views');//第一个参数必需是views，第二个参数是模板存放的目录

//注册模板引擎
app.set('view engine','html');//第一个参数必需是view engine，第二个参数是模板名称

app.get('/',(req,res)=>{
    res.render('index',{
        title:'跨猪网',
        content:'我是内容',
        obj:{
            name:'jly',
            age:18
        },
        name:'tom',
        arr:['apple','orange','pear']
    });
})

app.get('/extend',(req,res)=>{
    res.render('extend');
})

app.listen(port,()=>{
    console.log('app is running at 127.0.0.1:3000');
})