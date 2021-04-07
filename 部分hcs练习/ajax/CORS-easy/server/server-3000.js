const http = require('http');
const fs = require('fs');
const url = require('url')

var server = http.createServer((req,res)=>{
	var urlStr = req.url;

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
	}


})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3000')
})