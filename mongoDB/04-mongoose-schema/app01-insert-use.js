const mongoose = require('mongoose');
const UserModel =  require('./modules/users.js');
//1 连接数据库
mongoose.connect('mongodb://localhost/kuazhu',{uswNewParser:true});

const db = mongoose.connection;
db.on('error',(err)=>{
console.log('connection error');
throw err;
});

db.once('open',()=>{
	console.log('connection successful');

	UserModel.insertMany({
		name:'jly',
		age:'18',//'a18'会报错，转换不了数字
		major:'computer'
	},(err,docs)=>{
		if(err){
			console.log('insertMany err:::',err);
		}else{
			console.log(docs);
		}
	})

});
