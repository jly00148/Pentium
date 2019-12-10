const mongoose = require('mongoose');

const UserModel = require('./modules/users.js');
//1 连接数据库
mongoose.connect('mongodb://localhost/kuazhu',{uswNewParser:true});

const db = mongoose.connection;
db.on('error',(err)=>{
console.log('connection error');
throw err;
});

db.once('open',()=>{
	console.log('connection successful');

	
	UserModel.distinct('name',(err,result)=>{
		if(err){
			console.log('distinct err',err);
		}else{
			console.log(result);
		}
	})		












});
