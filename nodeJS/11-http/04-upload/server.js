const http = require('http');
const url = require('url');
const querystring = require('querystring');
const formidable = require('formidable');
const port = 3000;
const hostname = '127.0.0.1';


let server = http.createServer((req,res)=>{
	//console.log(req.url);
	
	/*
	if(req.url == '/'){
		let body = '';

		req.on('data',(chunk)=>{
			body+=chunk;
		})

		req.on('end',()=>{
			//console.log(body);
			let obj = querystring.parse(body);
			//console.log(obj);  [Object: null prototype] { username: 'jly', age: '123', avatar: 'p1.jpg' }
		})		
	}
	*/
	//console.log(req.method);

	
	if(req.method.toLowerCase() == 'post'){
			//console.log(formidable);
			/*
			{ [Function: IncomingForm]
		  		super_:
		   { [Function: EventEmitter]
		     EventEmitter: [Circular],
		     usingDomains: false,
		     defaultMaxListeners: [Getter/Setter],
		     init: [Function],
		     listenerCount: [Function] },
  			IncomingForm: [Circular] }
  			*/
			


		let form = new formidable.IncomingForm();
			//console.log(form);
			/*
			IncomingForm {
			  _events: [Object: null prototype] {},
			  _eventsCount: 0,
			  _maxListeners: undefined,
			  error: null,
			  ended: false,
			  maxFields: 1000,
			  maxFieldsSize: 20971520,
			  maxFileSize: 209715200,
			  keepExtensions: false,
			  uploadDir: 'C:\\Users\\Pentium\\AppData\\Local\\Temp',
			  encoding: 'utf-8',
			  headers: null,
			  type: null,
			  hash: false,
			  multiples: false,
			  bytesReceived: null,
			  bytesExpected: null,
			  _parser: null,
			  _flushing: 0,
			  _fieldsSize: 0,
			  _fileSize: 0,
			  openedFiles: [] }
			  */

			  form.uploadDir = './upload'; //指定上传的文件夹
			  form.keepExtensions = true;// 指定文件格式，默认为false，无格式

		form.parse(req,(err,fields,files)=>{
			//console.log({fields:fields ,files:files});
			/*
			{ fields: { username: 'jly', age: '123', avatar: 'p1.jpg' },
			  files: {} }
			  */

			//console.log(req);
			//console.log(err,fields,files);
		})
		
	}
	

	
	res.setHeader('Content-Type','text/plain;charset=utf-8');
	res.end('hello');


})


server.listen(port,hostname,function(){
	console.log('server is running at http://127.0.0.1');
})