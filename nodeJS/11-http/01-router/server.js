const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';


let server = http.createServer((req,res)=>{
	//console.log(req.url);

	
	let filePath = req.url;
	if(filePath == '/index.html'){
		fs.readFile('./index.html',(err,data)=>{
			if(err){
				res.statusCode = 500;
				res.end('<h1>服务器端index页面出错了！！！</h1>');
			}else{
				res.setHeader('Content-Type','text/html;charset=utf-8');		
				res.end(data);
			}
		})
	}else if(filePath == '/list.html'){
		fs.readFile('./list.html',(err,data)=>{
			if(err){
				res.statusCode = 500;
				res.end('<h1>服务器端list页面出错了！！！</h1>');
			}else{
				res.setHeader('Content-Type','text/html;charset=utf-8');		
				res.end(data);
			}
		})
	}else if(req.url == '/favicon.ico'){
		res.end('favicon');
	}else if(req.url == '/css/index.css'){
		fs.readFile('./css/index.css',(err,data)=>{
			if(err){
				res.statusCode = 500;
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end('<h1>服务器端css获取出错！！！</h1>');
			}else{
				res.setHeader('Content-Type','text/css;charset=utf-8');		
				res.end(data);
			}
		})
	}else if(req.url == '/images/p1.jpg'){
		fs.readFile('./images/p1.jpg',(err,data)=>{
			if(err){
				res.statusCode = 500;
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end('<h1>服务器端images获取出错！！！</h1>');
			}else{
				res.setHeader('Content-Type','image/jpeg;charset=utf-8');		
				res.end(data);
			}
		})
	}else if(req.url == '/js/index.js'){
		fs.readFile('./js/index.js',(err,data)=>{
			if(err){
				res.statusCode = 500;
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end('<h1>服务器端js获取出错！！！</h1>');
			}else{
				res.setHeader('Content-Type','application/x-javascript;charset=utf-8');		
				res.end(data);
			}
		})
	}
	else{
		res.statusCode = 400;
		res.setHeader('Content-Type','text/html;charset=utf-8');		
		res.end('<h1>浏览器获取页面出错了！！！</h1>');
	}



})


server.listen(port,hostname,function(){
	console.log('server is running at http://127.0.0.1');
})