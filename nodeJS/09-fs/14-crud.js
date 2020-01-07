 const fs = require('fs');
//console.log(fs.readFile);     [Function: readFile]
const filePath = ('./14-data.json');


function add(name,callback){

fs.readFile(filePath,(err,data)=>{

		if(err){
			callback(err,null);
		}else{	

			let arr = JSON.parse(data);
			//console.log(arr);

			arr.push({
				id:Date.now().toString() + parseInt(Math.random() * 10000).toString().padStart(4,'0'),
				name:name			
			})

			//console.log(arr);

			let strArr = JSON.stringify(arr);

			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					callback(err,null);
				}else{
					callback(null,data);
				}
			})
		}
	})
}
add(
	'leo',
	(err,data)=>{
		if(err){
			console.log(err);
		}else{
			console.log(data);
		}
	}
);
