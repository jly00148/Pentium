const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');


const server = http.createServer((req,res)=>{
	console.log('req=>',req.url);

	let reqUrl = url.parse(req.url,true);
	//console.log('reqUrl:::',reqUrl);
	//console.log('pathname',reqUrl.pathname);
	let pathname = reqUrl.pathname; 
	//console.log('pathname111',pathname); // /
	if(pathname.lastIndexOf('.') == -1){
		pathname = pathname + "/index.html";
		console.log('pathname12',pathname);//  //index.html
	}

	let filePath = path.normalize(__dirname + '/static/' + pathname);
	let extname = path.extname(filePath);
	console.log(extname);
	//console.log('dirname:::',__dirname);E:\pentium\nodeJS\10-http\06-blog
	//console.log('filePath:::',filePath);// E:\pentium\nodeJS\10-http\06-blog/static/index.html


	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.end('<h1>err</h1>');
		}else{
			res.setHeader('Content-Type',mime[extname]+';charset=UTF-8');;

			res.end(data);
		}
	})



})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})