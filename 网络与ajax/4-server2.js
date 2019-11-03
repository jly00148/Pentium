/*7-ajaxtest POST请求*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
	var urlStr = req.url;
	console.log(urlStr)
	console.log(req.method);
	console.log('urlStr',urlStr);
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}

	if(req.method == 'POST'){
		//res.end('post data...')
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log(body);
			res.end(body);
		})
	}else if(req.method == 'GET'){
		var filePath = './'+ urlStr;
		fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.statusCode = 404;
			res.end('not found');
		}
	})
	}else{
		res.end('ok');
	}

	//console.log(req.url);
})

server.listen(3000,'127.0.0.1',function(){
	console.log("Server is running at http://127.0.0.1:3000");
})