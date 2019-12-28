/*发送jsonp的ajax请求*/
const http = require('http');
const url = require('url');
const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
	const strUrl = req.url;
	var parm = url.parse(strUrl,true).query;
	var obj = '{"name":"jly","age":18}';
	res.end(parm.callback+'('+obj+')');
})

server.listen(port,hostname,()=>{
	console.log('the server is running at 127.0.0.1');
})