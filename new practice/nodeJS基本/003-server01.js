/*发送基本GET的ajax请求*/
const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
	//console.log(req.url);
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

})

server.listen(port,hostname,()=>{
	console.log('the server is running at 127.0.0.1');
})