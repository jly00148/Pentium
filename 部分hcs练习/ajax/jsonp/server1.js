const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
	var urlStr = req.url;
	var filePath = './'+urlStr
	var data = fs.readFileSync(filePath)
	res.end(data)
})

server.listen(3000,'127.0.0.1',()=>{
	console.log(`the server is running at port ${3000} ` )
})