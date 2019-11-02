var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
	var urlStr = req.url;
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
	var filePath = './'+ urlStr;

	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.end('not found');
		}
	})
	//console.log(req.url);
})

server.listen(3000,'127.0.0.1',function(){
	console.log("Server is running at http://127.0.0.1:3000");
})