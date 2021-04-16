const http = require('http');
var path = require('path');
var fs = require('fs')
var mine = require('./mine.json')

const server = http.createServer((req,res)=>{
	const filePath = path.normalize(__dirname+ '/static/' + req.url);
	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.statusCode = 404;
			res.setHeader('Content-Type','text/html;charset=utf-8')
			res.end('<h1>未找到404</h1>')
		}else{
			var extname = path.extname(filePath)
			var mineType = mine[extname] || 'text/plain';
			res.setHeader('Content-Type',mineType+';charset=utf-8')
			res.end(data)
		}
	})
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('the server 127.0.0.1 is running at port 3000')
})