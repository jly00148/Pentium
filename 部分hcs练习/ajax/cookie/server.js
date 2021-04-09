const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
	var expires = new Date(Date.now() + 3 * 1000).toUTCString()
	res.setHeader('Set-Cookie','test=1234;expires='+expires)
	// res.setHeader('Set-Cookie','test=1234;max-age=500')
	var urlStr = req.url;
	var filePath = './'+urlStr
	var data = fs.readFileSync(filePath)
	res.end(data)
})

server.listen(3000,'127.0.0.1',()=>{
	console.log(`the server is running at port ${3000} ` )
})