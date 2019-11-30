const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	
	console.log('req=>',req.url);//?username=jly&age=18
	console.log('method=>',req.method);

	let body = '';
	req.on('data',(chunk)=>{
		console.log('1',body);//''
		console.log('2',chunk);//<Buffer 75 73 65 72 6e 61 6d 65 3d 6a 6c 79 26 61 67 65 3d 31 38>
		body += chunk;
		console.log('3',body);//username=jly&age=18
		console.log('4',chunk);//<Buffer 75 73 65 72 6e 61 6d 65 3d 6a 6c 79 26 61 67 65 3d 31 38>
	})
	req.on('end',()=>{
		console.log('5',body);//username=jly&age=18
		let obj = querystring.parse(body);
		console.log('obj',obj);//[Object: null prototype] { username: 'jly', age: '18' }
	})

	res.setHeader('Content-Type','text/html;charset-utf-8');
	res.end('ok');

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
})
