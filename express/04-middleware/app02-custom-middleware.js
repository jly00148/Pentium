const http = require('http');


//version 1 
/*
const server = http.createServer((req,res)=>{
	res.end('ok');
})
*/

//version 2 
/*
const app = (req,res)=>{
	res.end('ok');
}
*/

//version 3
const express = ()=>{
	const app = (req,res)=>{
		res.end('ok');
	}

	return app;
}
const app = express();
const server = http.createServer(app);
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing ....');
})