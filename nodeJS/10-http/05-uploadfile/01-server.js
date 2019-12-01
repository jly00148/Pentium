const http = require('http');
const formidable = require('formidable');

const server = http.createServer((req,res)=>{
	
	console.log('req=>',req.url);//?username=jly&age=18
	console.log('method=>',req.method);



	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.incomingForm();
		form.uploadDir = './upload';
		form.parse(req,function(err,fields,files){

			console.log({fields: fields,files: files});
			res.setHeader('Content-Type','text/html;charset-utf-8');
			res.end('ok');
		})
	}
	/*
	let body = '';
	req.on('data',(chunk)=>{
		body+=chunk;
	})

	req.on('end',()=>{
		let obj = querystring.parse(body);
		console.log(obj);
	})
	*/



});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
})
