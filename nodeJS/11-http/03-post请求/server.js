const http = require('http');
const url = require('url');
const querystring = require('querystring');
const port = 3000;
const hostname = '127.0.0.1';


let server = http.createServer((req,res)=>{
	if(req.url == '/'){

		let body = '';

		req.on('data',(chunk)=>{
			body += chunk;
		})

		req.on('end',()=>{
			//console.log(body);
			let obj = querystring.parse(body);
			console.log(obj.username);
		})		
	}


	res.setHeader('Content-Type','text/plain;charset=utf-8');
	res.end('hello');


})


server.listen(port,hostname,function(){
	console.log('server is running at http://127.0.0.1');
})