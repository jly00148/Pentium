const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	/*
	//console.log('req=>',req.url);//?username=jly&age=18
	//console.log('method=>',req.method);

	const myUrl = url.parse(req.url);
	//console.log('url:::',myUrl);
	//console.log('query:::11',myUrl.query);
	const obj = querystring.parse(myUrl.query);
	console.log(obj);
	*/


	const myUrl1 = url.parse(req.url,true);
	//console.log(myUrl1);
	console.log(myUrl1.query);
	res.setHeader('Content-Type','text/html;charset-utf-8');
	res.end('ok');

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
})
