const fs = require('fs');
//console.log(fs.readFile); [Function: readFile]

const util = require('util');
//console.log(util); object


let filePath = ('./14-data.json');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

/*
async function add(name){
	//1. 打开文件
	let arr = await readFile(filePath);
	
	let strArr = JSON.parse(arr);
	//console.log(data); []

	//2. 写入文件
	strArr.push({
		id:Date.now().toString() + parseInt(Math.random() * 10000).toString().padStart(4,'0'),
		name:name
	})
	//3. 保存文件

	let endStr = JSON.stringify(strArr);
	await writeFile(filePath,endStr);

	return strArr;
}
add('Leo')
.then(data=>{
	console.log(data);
},err=>{
	console.log(err);
})
*/



/*
async function get(id){
	let arr = await readFile(filePath);
	//console.log(arr);	

	let strArr = JSON.parse(arr);
	//console.log(strArr);  [ { id: '15783879724635874', name: 'jly' } ]

	//return let obj = strArr.find(val=>{
	return strArr.find(val=>{
		//console.log(val); { id: '15783879724635874', name: 'jly' }
		//console.log(val.id == val['id']); true
		//console.log(val.id == id); true
		return val.id == id;

	});
	//console.log('obj::::',obj); // { id: '15783879724635874', name: 'jly' }


}	
get("15783901868604826")
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
*/


/*
async function update(id,name){
	let arr = await readFile(filePath);

	let strArr = JSON.parse(arr);;
	let obj = strArr.find(val=>{
		return val.id == id;
	})

	if(obj){
		obj.name = name;
		//console.log(obj);
		//console.log(strArr)
		let endStr = JSON.stringify(strArr);

		await writeFile(filePath,endStr);
		return strArr;

	}else{
		return obj;
	}





}
update('15783901868604826','Amy')
.then(data=>{
	console.log('data:::',data);
})
.catch(err=>{
	console.log(err);
})
*/

async function remove(id){
	let data = await readFile(filePath);
	let arr = JSON.parse(data);

	return newArr = arr.filter(val=>{
		return val.id != id;
	})
	//console.log(newArr);



}
remove('15783879724635874')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log('err:::',err);
})
