/*发送基本POST的ajax请求*/
const http = require('http');
const fs = require('fs');
const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000');
	//res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Content-Type','text/html');
	res.setHeader('test-kuazhu','kuazhu');
	res.setHeader('Access-Control-Expose-headers','Date,test-kuazhu,Access-Control-Allow-Origin');
	// console.log(req.url);
	// console.log(req.method);
	if(req.method == 'POST'){
		var body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			res.end(body);
		})
	}else if(req.method == 'GET'){
		const strUrl = req.url;
		if(strUrl == '/favicon.ico'){
			res.end('favicon.ico');
		}

		const filePath = './'+ strUrl;

		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.statusCode = 404;
				res.end('not found');			
			}else{

				res.end(data);
			}
		})
	}else{
		res.end('hello world');
	}


})

server.listen(port,hostname,()=>{
	console.log('the server is running at 127.0.0.1');
})