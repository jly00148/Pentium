const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
	var urlStr = req.url;

	if(urlStr != '/favicon.ico'){
		var filePath = '../'+urlStr
		var data = fs.readFileSync(filePath)

		//协商缓存一(不推荐):原因是max-age = 30时间间隔内多次修改不起作用无法走到协商缓存
		//设置一个较短强缓存时间测试
		res.setHeader("Cache-control",'max-age =30')//3秒

		//获取文件修改信息:
		var statObj = fs.statSync(filePath)
		var ctime = statObj.ctime.toGMTString()

		//设置协商缓存
		res.setHeader('Last-Modified',ctime)

		//获取请求头的if-modified-since
		var ifModifiedSince = req.headers['if-modified-since']

		//比较更新时间
		if(ifModifiedSince && ifModifiedSince === ctime){
			res.statusCode = 304
			return res.end()
		}

		res.end(data);
	}
})


server.listen('3000','127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3000')
})