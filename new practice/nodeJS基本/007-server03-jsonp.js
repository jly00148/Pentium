/*发送基本POST的ajax请求*/
const http = require('http');
const url = require('url');
const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
	const strUrl = req.url;
	var parm = url.parse(strUrl,true).query;
	//console.log('parm:::',parm);   [Object: null prototype] { callback: 'handleCallback' }
	//console.log('typeof parm:::',typeof parm);   object
	//console.log('parm.callback:::',parm.callback);   handleCallback
	//console.log('typeof parm.callback',typeof parm.callback);  string
	var obj = '{"name":"jly","age":18}';
	var str = 'hello';
	res.end(parm.callback+'('+obj+')');
	//res.end(parm.callback+'("'+str+'")');
	/*
	if(strUrl.search(/\？/) !=-1){
		var parm = url.parse(strUrl,true).query;
		//console.log(parm.name);
		console.log(typeof parm);
		var json = JSON.stringify(parm);
		res.end(json);
	}
	*/


	//getData?callbak = handleCallback
	//var parm = url.parse(strUrl);//   /getData?callback=handleCallback
	//var parm = url.parse(strUrl).query;  // /getData?callback=handleCallback
	//var parm = url.parse(strUrl,true).query;  // /getData?callback=handleCallback
	//console.log('parm:::',url.parse(strUrl,true).query); // parm::: [Object: null prototype] { callback: 'handleCallback' }
	//var json = JSON.stringify(url.parse(strUrl,true).query); // {"callback":"handleCallback"}
	//console.log(typeof json); // string

})

server.listen(port,hostname,()=>{
	console.log('the server is running at 127.0.0.1');
})