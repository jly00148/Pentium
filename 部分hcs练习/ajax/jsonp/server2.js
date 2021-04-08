const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req,res)=>{
	var urlStr = req.url;
	var json = '{"name":"jly","age":"18"}'
	var parm = url.parse(urlStr,true).query
	var data = parm.handback + '('+ json +')'
	res.end(data)
})

server.listen(3001,'127.0.0.1',()=>{
	console.log(`the server is running at port ${3001} ` )
})