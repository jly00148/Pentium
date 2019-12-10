const mongoose = require('mongoose');


//1 定义schema
const UserSchema = new mongoose.Schema({
	name:String,
	age:Number,
	major:String
});

//2 生成模型module
//2.1 mongoose.model第一个参数指定集合的名称,mongoose会自动变为复数
//2.2 mongoose.model第二个参数指定Schema
const UserModel = mongoose.model('user',UserSchema);

//导出
module.exports = UserModel;