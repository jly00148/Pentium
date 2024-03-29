const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const swig = require('swig');
const mime = require('./mime.json');
const { getAll,add,remove } = require('./WishModel.js');



const server = http.createServer((req,res)=>{
	//console.log('req=>',req.url);

	let reqUrl = url.parse(req.url,true);
	//console.log('reqUrl:::',reqUrl);
	//console.log('pathname',reqUrl.pathname);
	let pathname = reqUrl.pathname;

	if(pathname == '/' || pathname == '/index.html'){
		getAll()
		.then(data=>{



			/*
			let html = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>许愿墙</title>
				<link rel="stylesheet" href="css/index.css">
			</head>
			<body>
				<div class="wall">`
				data.forEach(item=>{
					html+=`
						<div class="wish" draggable=true style="background: ${item.color}">111
							<a href="javascript:;" class="close" data-id='${item.id}'></a>
							${item.content}
						</div>`
					
				})

				html+=`</div>
				<div class="form-box">
					<div>
						<textarea name="content" id="content" cols="30" rows="20"></textarea>
					</div>
					<div>
						<a href="javascript:;" class="sub-btn" >许下心愿</a>
					</div>
				</div>	
			</body>
			<script src="js/jquery-1.12.4.min.js"></script>
			<script src="js/jquery.pep.js"></script>
			<script src="js/index.js"></script>
			</html>`;
			*/


			let template = swig.compileFile(__dirname+'/static/index.html');
			let html = template({
				data
			});
			res.setHeader('Content-Type',"text/html;charset=utf-8");	
			res.end(html);			
		})
		.catch(err=>{
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			console.log('err:::',err);
			res.statusCode = 500;
			res.end('<H1>出错了</H1>');
		})


	}else if(pathname == '/add' && req.method.toLowerCase() == 'post'){//处理添加
		//获取参数
		let body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			add(obj)
			.then(data=>{
				let result = JSON.stringify({
					status:0,//代表成功
					data:data
				})
				res.end(result);

			})
			.catch(err=>{
				let result = JSON.stringify({
					status:10,//代表失败
					message:'删除失败'
				})
				res.end(result);				
			})
			res.end('ok');
		});		
	}else if(pathname == 'del'){
		let id = reqUrl.query.id;
		remove(id)
		.then(data=>{
			let result =JSON.stringify({
				status:0,
			})
			res.end();
		})
		.catch(err=>{
			let result =JSON.stringify({
				status:10,
				message:'添加失败'
			})
			res.end(result);		
		})
	}
	else{//请求静态资源
		//console.log('pathname111',pathname); // /
		let filePath = path.normalize(__dirname + '/static/' + pathname);
		let extname = path.extname(filePath);
		//console.log('dirname:::',__dirname);E:\pentium\nodeJS\10-http\06-blog
		//console.log('filePath:::',filePath);// E:\pentium\nodeJS\10-http\06-blog/static/index.html
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset= utf-8');
				res.end('<h1>err</h1>');
			}else{
				res.setHeader('Content-Type',mime[extname]+';charset=UTF-8');;

				res.end(data);
			}
		})
	}






})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})