const mongoose = require('mongoose');


//1 定义schema
const UserSchema = new mongoose.Schema({
	/*
	name:String,
	age:Number,
	major:String
	*/
	name:{
		type:String,
		required:[true,'用户名必需输入'],
		maxlength:[5,'最多五位字符'],
		min:[3,'最少三位字符']
	},
	age:{
		type:Number,
		default:0,
		min:[10,'最小年龄是岁'],
		man:[20,'最大年龄是20岁']
	},
	major:{
		type:String,
		enum:['art','computer','music','chemical','sport'],
		default:'art'
	},
	phone:{
		type:String,
		validate:{
			validitor:function(val){
				return /1[358]\d{9}/.test(val)
			},
			message:'{VALUE}不是合法手机号'
		}
	},
	locked:{
		type:Boolean,
		default:false
	},
	friends:{
		type:Array
	},
	createAt:{
		type:Date,
		default:Date.now
	}
});

//2 生成模型module
//2.1 mongoose.model第一个参数指定集合的名称,mongoose会自动变为复数
//2.2 mongoose.model第二个参数指定Schema
const UserModel = mongoose.model('user',UserSchema);

//导出
module.exports = UserModel;