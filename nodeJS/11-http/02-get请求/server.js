const http = require('http');
const url = require('url');
const querystring = require('querystring');
const port = 3000;
const hostname = '127.0.0.1';


let server = http.createServer((req,res)=>{
	//console.log('req.url=>',req.url,'req.method=>',req.method); req.url:/index.html,req.method:get/req.url:/favicon.ico,req.method:get
	//console.log('req.url=>',req.url,'req.method=>',req.method); /?username=jly&age=12 req.method=> GET
		if(req.url == '/?username=jly&age=12'){
			let myUrl = url.parse(req.url);

			//console.log(myUrl); object
			//console.log(myUrl.search); //  ?username=jly&age=12
			//console.log(myUrl.query); //  username=jly&age=12

			/*
			let obj = querystring.parse(myUrl.query);
			console.log(obj);
			console.log(obj.username);
			*/

			/*
			let obj1 = url.parse(req.url,true);
			console.log('obj1:::',obj1);
			console.log(obj1.query);
			console.log(obj1.query.username);
			*/
		}

	res.setHeader('Content-Type','text/plain;charset=utf-8');
	res.end('hello');


})


server.listen(port,hostname,function(){
	console.log('server is running at http://127.0.0.1');
})