/**nodeJS基本*/
const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('hello world');
})

server.listen(port,hostname,()=>{
	console.log('the server is running at 127.0.0.1');
})