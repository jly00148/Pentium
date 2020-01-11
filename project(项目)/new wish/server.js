const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const hostname = '127.0.0.1';
const mime = require('./mime.json');


let server = http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url == '/' || req.url == '/index.html'){//获取首页

        fs.readFile('./static/index.html',(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.statusCode = 500;
                res.end('<h1>服务器读取首页失败</h1>');             
            }else{
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        });

    }else if(req.url == '/favicon.ico'){
        res.end('favicon');
    }else{
        //获取static静态资源
        let staticFilePath = path.normalize(__dirname + '/static/' + req.url);

        let extname = path.extname(staticFilePath);
        console.log(extname);
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
})

server.listen(port,hostname,function(){
    console.log('server is running at 127.0.0.1:3000');
})