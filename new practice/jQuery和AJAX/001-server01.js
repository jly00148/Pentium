/*封装ajax*/
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
	console.log(req.method);
	if(req.method == 'POST'){
		var body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			//console.log(body);  name=Amy&age=18
			console.log(body);
			console.log(typeof body);
			res.end(body);
		})
	}else if(req.method == 'GET'){
		const strUrl = req.url;
		console.log(strUrl);
		if(strUrl.search(/\?/) !=-1){
			var parm = url.parse(strUrl,true).query;
			//console.log(parm.name);
			console.log(typeof parm);//object
			var json = JSON.stringify(parm);
			console.log(typeof json);//string
			//console.log(json === '{"name":"Amy","age":"18"}');//string
			res.end(json);
		}
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