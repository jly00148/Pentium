const http = require('http');
const fs = require('fs');
const path = require('path');
const swig = require('swig');
const port = 3000;
const hostname = '127.0.0.1';
const mime = require('./mime.json');
const { getAll } = require('./module.js');
//console.log(''+getAll);


let server = http.createServer((req,res)=>{
    //console.log(req.url);

    if(req.url == '/' || req.url == '/index.html'){//获取首页

        /*
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
        */

        getAll()
        .then(data=>{
            // console.log(data);
           res.setHeader('Content-Type','text/html;charset=utf-8');
       


           /*
           let html = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>Document</title>
                            <link rel="stylesheet" href="css/index.css">
                            <link rel="stylesheet" href="css/reset.css">
                        
                        </head>
                        <body>
                            <div class="wall">`
                            data.forEach(item=>{
                                html+=`<div class="wish" style="background-color:${item.background};">
                                    <a href="javascript:;" class="close" data-id='${item.id}'></a>
                                    ${item.content}
                                    </div>`

                            })

                           html+=` </div>
                            <div class="form-box">
                                <div>
                                    <textarea name="content" id="content" cols="30" rows="20"></textarea>
                                </div>
                                <div>
                                    <a href="javascript:;" class="sub-btn">许下心愿</a>
                                </div>
                            </div>
                        </body>
                        <script src="js/jquery-1.12.4.js"></script>
                        <script src="js/jquery.pep.js"></script>
                        <script src="js/index.js"></script>
                        </html>` 
           res.end(html); 
           
           */


           let template = swig.compileFile(__dirname + '/static/index.html');
           let html = template({
               data
           })
           res.end(html);
        })

    

    }else if(req.url == '/favicon.ico'){
        res.end('favicon');
    }else{
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
})

server.listen(port,hostname,function(){
    console.log('server is running at 127.0.0.1:3000');
})