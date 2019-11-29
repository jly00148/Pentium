const http = require('http');

const server = http.createServer((req,res)=>{

	res.write('<h1>hello你好...</h1>');
	res.end('ok');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})