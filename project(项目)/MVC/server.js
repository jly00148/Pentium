const http = require('http');
const fs = require('fs');
const path = require('path');
const swig = require('swig');
const querystring = require('querystring');
const url = require('url');
const port = 3000;
const hostname = '127.0.0.1';
const mime = require('./mime.json');
const { getAll,add,remove } = require('./module.js');
let server = http.createServer((req,res)=>{

     let reqUrl = url.parse(req.url,true);
     let pathname = reqUrl.pathname;
     //console.log(reqUrl);

     //约定：
    //  /Controller/ation/
    //  /wish/add添加
    //  /wish/del 删除
    //  /wish/static/ 请求的是静态资源

    if(pathname.startsWith('/static/')){
        let staticFilePath = path.normalize(__dirname + '/static/' + req.url);

        let extname = path.extname(staticFilePath);//获取静态资源文件格式
        //console.log(extname);
        
        fs.readFile(staticFilePath,(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.statusCode = 500;
                res.end('<h1>服务器读取static失败</h1>');               
            }else{
                res.setHeader('Content-Type',mime[extname]+';charset=utf-8');
                res.end(data);                
            }
        })
    }else if(req.url == '/favicon.ico'){
        res.end('favicon.ico');
    }
    else{   //  路由：/Wish/index
        let paths = pathname.split('/');
        //console.log(paths); [ '', 'Wish', 'index' ]
        let controller = paths[1] || 'wish';
        let action = paths[2] || 'index';

        let mode = require('./controller/'+ controller);
        // let mode1 = require('./controller/Wish.js');
       // console.log(mode); //wish {}
        // console.log(mode1);
        //console.log(mode == mode1); true

        try{
            mode[action] && mode[action]();
        }catch(err){
            console.log('err:::',err);
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end('<h1>出错了</h1>')
        }
        res.end('ok');
    }


     /*
    if(req.url == '/' || req.url == '/index.html'){//获取首页
        getAll()
        .then(data=>{
            // console.log('data:::',data);
           res.setHeader('Content-Type','text/html;charset=utf-8');
       
           let template = swig.compileFile(__dirname + '/static/index.html');
           let html = template({
               data
           })
           res.end(html);
        })
    }
    else if(req.url == '/add' && req.method.toLowerCase() == 'post'){
        //res.end('ok');
        let body = '';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            //console.log(body);
            let obj = querystring.parse(body);
            //console.log(obj);
            add(obj)
            .then(data=>{
                let result = JSON.stringify({
                    data:data,
                    status:1
                })         
                res.end(result);

            })
            .catch(err=>{
                let result = JSON.stringify({
                    message:'添加失败',
                    status:0
                })
                res.end(result);
            })

        })

    }
    else if(req.url == '/favicon.ico'){
        res.end('favicon');
    }
    else if(reqUrl.pathname == '/del'){
        let id = reqUrl.query.id;
        remove(id)
        .then(data=>{
            let status = {
                status:1,
                data:data
            }
            res.end(JSON.stringify(status))
        })
        .catch(err=>{
            let status = {
                status:0,
                message:'出错了'
            }
            res.end(JSON.stringify(status));
        })
    }
    else{
        //获取static静态资源css、js、img等
        let staticFilePath = path.normalize(__dirname + '/static/' + req.url);

        let extname = path.extname(staticFilePath);//获取静态资源文件格式
        //console.log(extname);
        
        fs.readFile(staticFilePath,(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.statusCode = 500;
                res.end('<h1>服务器读取static失败</h1>');               
            }else{
                res.setHeader('Content-Type',mime[extname]+';charset=utf-8');
                res.end(data);                
            }
        })
    }
    */
})

server.listen(port,hostname,function(){
    console.log('server is running at 127.0.0.1:3000');
})