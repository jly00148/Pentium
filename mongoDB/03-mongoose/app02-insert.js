const mongoose = require('mongoose');

const getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random());
}

const names = ['amy','tom','leo','peter','ricky','lucy','andy','mike'];
const majors = ['art','computer','sport','music'];

const getName = ()=> names[getRandom(0,names.length-1)];
const getMajor = ()=> majors[getRandom(0,majors.length-1)];
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

	//4 用模型操作数据(CRUD)；插入数据
	//4.1 
	/*
	const user = new UserModel({name:'jly',age:18,major:'computer'});
	user.save((err,doc)=>{
		if(err){
			console.log('save user error::',err);		
		}else{
			console.log(doc);
		}

	})
	*/


	//4.2 查找
	/*
	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find user error::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	//4.3 更新文档
	//update要被弃用，不推荐使用
	/*
	UserModel.update({name:'jly'},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('find user error::',err);
		}else{
			console.log(result);
		}		
	})
	*/

	//推荐的更新文档
	/*
	UserModel.updateOne({name:'jly'},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('find user error::',err);
		}else{
			console.log(result);
		}		
	})
	*/

	//删除文档
	/*
	UserModel.deleteOne({name:'jly'},(err,result)=>{
		if(err){
			console.log('deleteOne error::',err);
		}else{
			console.log(result);
		}	
	})
	*/
	//插入文档
	/*
	UserModel.insertMany(
		[
		{name:getName(),age:getRandom(10,150),major:getMajor()},
		{name:getName(),age:getRandom(10,150),major:getMajor()},
		{name:getName(),age:getRandom(10,150),major:getMajor()}
		]
		,(err,docs)=>{
		if(err){
			console.log('insertMany error::',err);
		}else{
			console.log(docs);
		}
	})
	*/

	let promise = UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()}
		]);

	promise
	.then(docs=>{
		console.log(docs);
	})
	.catch(err=>{
		console.log('insertMany error',err);
	})














});
