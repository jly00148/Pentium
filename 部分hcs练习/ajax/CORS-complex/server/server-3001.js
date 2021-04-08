const http = require('http');
const fs = require('fs');
const url = require('url')

var server = http.createServer((req,res)=>{
	var urlStr = req.url;
	res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000')

	//允许跨域携带cookie(有三个条件分别是：
	// 当前行一条;:
	// 第二条：res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000')允许访问的源不能为*)
	//第三条是发送ajax之前允许发送cookie
	res.setHeader('Access-Control-Allow-Credentials',true)


	//获取来自3000端口的cookie
	// console.log(req.headers['cookie'])


	//自定义字段：
	res.setHeader('Test-Res-Header','Test')

	//设置可允许前端非默认字段
	res.setHeader('Access-Control-Expose-Headers','date,Test-Res-Header')

	//POST复杂请求允许字段Content-Type
	res.setHeader('Access-Control-Allow-Headers','Content-Type')

	//POST复杂请求允许请求方法
	res.setHeader('Access-Control-Allow-Methods','PUT')


	if(req.method === 'GET'){

		if(urlStr.search(/\?/) != -1){//search必须有返回值
			var parm = url.parse(urlStr,true).query 
			res.setHeader('Content-Type','application/json')
			res.end(JSON.stringify(parm))
			return
		}

		var filePath = '../'+ urlStr
		var index = urlStr.indexOf('.');
		var exte = urlStr.slice(index);

		switch(exte){
			case '.html': 
				res.setHeader('Content-Type','text/html');
			break;

			case '.css':  
				res.setHeader('Content-Type','text/css')
			break;
		}
		
		var data = fs.readFileSync(filePath)
		res.end(data)

	}else if(req.method === 'POST'){
		var body = '';
		req.on('data',function(chunk){
			body+=chunk;
		})

		req.on('end',function(){
			res.setHeader('Content-Type','application/json')
			res.end(body)
		})
	}else if(req.method === 'OPTIONS'){
		res.end('OPTIONS OK')
	}else if(req.method === 'PUT'){
		res.end('PUT OK')
	}


})


server.listen(3001,'127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3001')
})