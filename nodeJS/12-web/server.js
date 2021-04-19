const http = require('http');
var path = require('path');
var fs = require('fs')
const url = require('url')
const mine = require('./mine.json')
const swig =require('swig')


const server = http.createServer((req,res)=>{
	const pathname = url.parse(req.url).pathname;

	//首页
	if(pathname == '/' || pathname == '/test.html'){
		//1.原用法
		// const htmlFilePath = path.normalize(__dirname+ '/static/' + 'test.html');
		// fs.readFile(htmlFilePath,(err,data)=>{
		// 	if(err){
		// 		res.statusCode = 404;
		// 		res.setHeader('Content-Type','text/html;charset=utf-8')
		// 		res.end('<h1>未找到404</h1>')
		// 	}else{
		// 		res.setHeader('Content-Type','text/html;charset=utf-8')
		// 		res.end(data)
		// 	}
		// })

		//2.swig用法：
		const htmlFilePath = path.normalize(__dirname+ '/static/' + 'test.html');
		const template = swig.compileFile(htmlFilePath)
		const html = template({
			data:[{id:1,task:'吃饭'},{id:2,task:'睡觉'}]
		})
		res.end(html)

	}else if(pathname === '/add'){
		var obj = {code:0,msg:'添加成功...'}
		var json = JSON.stringify(obj)
		res.end(json)
	}
	else{
		//静态资源
		const staticFilePath = path.normalize(__dirname+ '/static/' + req.url);
		fs.readFile(staticFilePath,(err,data)=>{
			if(err){
				res.statusCode = 404;
				res.setHeader('Content-Type','text/html;charset=utf-8')
				res.end('<h1>未找到404</h1>')
			}else{
				var extname = path.extname(staticFilePath)
				var mineType = mine[extname] || 'text/plain';
				res.setHeader('Content-Type',mineType+';charset=utf-8')
				res.end(data)
			}
		})
	}
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('the server 127.0.0.1 is running at port 3000')
})