const http = require('http');
const fs = require('fs');
const url = require('url')

var server = http.createServer((req,res)=>{
	var urlStr = req.url;
	var filePath = '../'+urlStr;
	var extIndex = urlStr.indexOf('.')
	var exct = urlStr.slice(extIndex)

	if(req.method === 'GET'){
		if(exct === '.html'){
			var data = fs.readFileSync(filePath)
			res.setHeader('Content-type','text/html')
			res.end(data)
		}else if(exct === '.ico'){
			res.end('favicon.ico')
		}else if(exct === '.css'){
			var data = fs.readFileSync(filePath)
			res.setHeader('Content-type','text/css')
			res.end(data)
		}else{
			var parm = url.parse(urlStr,true).query;
			// console.log(parm) [Object: null prototype] { name: 'tom', age: '18', city: 'beijing' }
			var json = JSON.stringify(parm)
			res.setHeader('Content-Type','application/json')
			res.end(json)
		}
	}else if(req.method === 'POST'){
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		})

		req.on('end',function(){
			var json = JSON.stringify({
				data:JSON.parse(body)//因为body是字符串
			})
			res.setHeader('Content-Type','application/json')
			res.end(json)
		})
	}


})


server.listen('3000','127.0.0.1',()=>{
	console.log('server 127.0.0.1. is running at port 3000')
})