const http = require('http');
const fs = require('fs');
const crypto =require('crypto')

const server = http.createServer((req,res)=>{
	var urlStr = req.url;

	if(urlStr != '/favicon.ico'){
		var filePath = '../'+urlStr
		var data = fs.readFileSync(filePath)

		//协商缓存二:
		res.setHeader("Cache-control",'max-age =2')//3秒

		//根据文件内容生成hash字符串签名:
		var hash = crypto.createHash('md5').update(data).digest('base64')

		//设置签名的协商缓存
		res.setHeader('Etag',hash)

		//获取请求头的if-none-match
		var ifNoneMatch = req.headers['if-none-match']

		//比较
		if(ifNoneMatch === hash){
			res.statusCode = 304
			return res.end()
		}

		res.end(data);
	}
})


server.listen('3000','127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3000')
})