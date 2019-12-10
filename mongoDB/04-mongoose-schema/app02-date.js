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

	UserModel.findById('5def547c7a34c25a185ea35f',(err,user)=>{
		if(err){
			console.log('findById err:::',err);
		}else{
			//const date = new Date(user.createAt);
			/*
			const date = user.createAt;
			let iHours = date.getHours();
			let iMinutes = date.getMinutes();
			let iSeconds = date.getSeconds();

			function correct(num){
				if(num < 10){
					'0' + num;
				}
				return num;
			}
			console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() +' '+ correct(iHours)+':'+  correct(iMinutes)+':'+ correct(iSeconds));
			*/
			console.log(moment(user.createAt).format('YYYY-MM-DD HH:MM:SS'));
		}
	})

});
