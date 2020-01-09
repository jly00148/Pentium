const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const mime = require('./mime.json');
const port = 3000;
const hostname = '127.0.0.1';

let server = http.createServer((req,res)=>{

	if(req.url != '/favicon.ico'){

			//let strUrl = url.parse(req.url);
			//console.log(strUrl);
			//console.log(strUrl.path);  '/?name=jly&age=18'
			//console.log(strUrl.search); '?name=jly&age=18'
			//console.log(strUrl.query); 'name=jly&age=18'


			//let strUrl = url.parse(req.url,true);
			//console.log(strUrl);
			//console.log(strUrl.path);  '/?name=jly&age=18'
			//console.log(strUrl.search); '?name=jly&age=18'
			//console.log(strUrl.query);  [Object: null prototype] { name: 'jly', age: '18' }


			 let strUrl = url.parse(req.url);
			 //let obj = querystring.parse(strUrl.query);
			// console.log(obj);  [Object: null prototype] { name: 'jly', age: '18' }
			//console.log(strUrl.pathname) /

			let pathname = strUrl.pathname;


			if(pathname.lastIndexOf('.') == -1){
				pathname = pathname + 'index.html';
				//console.log(pathname); /index.html
			}

			let filePath = path.normalize(__dirname + pathname);
			//console.log(filePath);  E:\pentium\nodeJS\11-http\05-stalic/lib//index.html
			//console.log(filePath); E:\pentium\nodeJS\11-http\05-stalic\lib\index.html  调用path的normalize方法

			let extname = path.extname(filePath);

			//console.log(extname) 获取扩展名
			fs.readFile(filePath,(err,data)=>{
				if(err){
					res.setHeader('Content-Type','text/html;charset=UTF-8');
					res.statusCode = 500;
					res.end('<h1>出错了！！！</h1>');					
				}else{
					res.setHeader('Content-Type',mime[extname]+';charset=UTF-8');
					res.end(data);				
				}
			})


	}

})

server.listen(port,hostname,()=>{
	console.log('server is running at http://127.0.0.1:3000');
})