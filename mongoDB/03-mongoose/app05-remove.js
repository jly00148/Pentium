const mongoose = require('mongoose');


//1 连接数据库
mongoose.connect('mongodb://localhost/kuazhu',{uswNewParser:true});

const db = mongoose.connection;
db.on('error',(err)=>{
console.log('connection error');
throw err;
});

db.once('open',()=>{
	console.log('connection successful');
	//2 定义schema
	const UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	});
	//3  生成模型Model
	//3.1 mongoose.model第一个参数指定集合的名称,mongoose会自动变为复数
	//3.2 mongoose.model第二个参数指定Schema
	const UserModel = mongoose.model('user',UserSchema);
	
	/*
	UserModel.deleteOne({},(err,result)=>{
		if(err){
			console.log('deleteOne err',err);
		}else{
			console.log(result);
		}
	})	
	*/

	UserModel.deleteOne({name:'andy'},(err,result)=>{
		if(err){
			console.log('deleteOne err',err);
		}else{
			console.log(result);
		}
	})		












});
