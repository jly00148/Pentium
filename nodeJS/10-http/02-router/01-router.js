

const http = require('http');

const fs = require('fs');
const server = http.createServer((req,res)=>{
	//console.log('url=>',req.url);

	const filePath = req.url;

	if(filePath  == './01-index.html'){
		//读取文件index.html
		fs.readFile('/01-index.html',(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.statusCode = 500;
				res.end('err');
			}else{
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end(data);
			}
		})

	}else if(filePath  == '/01-list.html'){
		//list.html
			if(err){
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.statusCode = 500;
				res.end('err');
			}else{
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end(data);
			}		
	}else{
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.statusCode = 500;
				res.end('err');
	}


	//res.setHeader('Content-Type','text/html;charset=utf-8');
	//res.write('<h1>hello你好...</h1>');
	//res.end('ok');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})