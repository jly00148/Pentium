const http = require('http');
var path = require('path');
var fs = require('fs')
const url = require('url')
const mine = require('./mine.json')
const swig =require('swig')
const { get,del,add } = require('./model/data.js')


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

		get()
		.then(data=>{
			const html = template({
  				data:JSON.parse(data.toString())// or data+ ''
			})
			res.end(html)
		})
		.catch(err=>{
			console.log(err)
		})


	}else if(pathname === '/add'){
		var body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			add(body)
			.then(result=>{
				res.end(JSON.stringify(result))
			})

		})
	}else if(pathname === '/del'){
		const query= url.parse(req.url,true).query
		const id = query.id
		del(id)
		.then(result=>{
			res.end(JSON.stringify(result))
		})
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