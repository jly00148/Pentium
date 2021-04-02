const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req,res)=>{
	var urlStr = req.url;
	var filePath = '..'+urlStr
	//处理带参数的get请求
	if(urlStr.search(/\?/) != -1){
		var parm = url.parse(urlStr,true).query;
		// console.log(parm) [Object: null prototype] { name: 'tom', age: '18', city: 'beijing' }
		var json = JSON.stringify(parm)
		res.setHeader('Content-Type','application/json')
		res.end(json)
	}

	if(filePath === '../favicon.ico'){
		res.end('favicon.ico')
	}else{
		if(urlStr.search(/\?/) != -1)
		var data = fs.readFileSync(filePath)
		res.end(data)
	}


	


})


server.listen('3000','127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3000')
})