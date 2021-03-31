const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
	var urlStr = req.url;

	if(urlStr != '/favicon.ico'){
		var filePath = '../'+urlStr
		var data = fs.readFileSync(filePath)
	}
	//强缓存方式一
	// res.setHeader("expires",new Date(Date.now() + 10000))
	res.setHeader("Cache-control",'max-age =10')//3秒
	res.end(data);
})


server.listen('3000','127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3000')
})