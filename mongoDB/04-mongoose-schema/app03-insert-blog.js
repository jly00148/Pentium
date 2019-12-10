const mongoose = require('mongoose');
const blogModel =  require('./modules/blog.js');
//1 连接数据库
mongoose.connect('mongodb://localhost/kuazhu',{uswNewParser:true});

const db = mongoose.connection;
db.on('error',(err)=>{
console.log('connection error');
throw err;
});

db.once('open',()=>{
	console.log('connection successful');

	blogModel.insertMany({
		title:'title1',
		content:'content1',//'a18'会报错，转换不了数字
		author:'5def547c7a34c25a185ea35f'
	},(err,docs)=>{
		if(err){
			console.log('insertMany err:::',err);
		}else{
			console.log(docs);
		}
	})

});
