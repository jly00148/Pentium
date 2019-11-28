const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);
async function callReadFile(){
	let data = await readFile('./01.txt',{flag:'r'})
	return data;
}

callReadFile()
.then(data=>{
	console.log(data);
})