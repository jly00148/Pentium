const express = require('express');
const swig = require('swig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


swig.setDefaults({
    cache:false
})

app.use(express.static('public'));

//配制应用模板
app.engine('html',swig.renderFile); //html是模板名称，也是模板文件的扩展名，swig.renderFile是解析模板的方法

//配制模板存放的目录
app.set('views','./views');//第一个参数必须是views,第二个参数是文件存放的目录

//配制模板引擎
app.set('view engine','html')//第一个参数必须是view engine，第二参数是模板名称

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routers/index.js'));
app.use('/user',require('./routers/user.js'));


app.listen(port,()=>{
    console.log(`server is connected at port ${port}`);
})


mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error',(err)=>{
    throw err;
})

db.once('open',(err,result)=>{
    if(err){
        console.log('open err',err);
    }else{
        console.log('open successful');
    }
})