const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

async function callReadFile(){

	let data = await readFile('./13-read-promise.txt',{flag:'r'});
	return data;
}

callReadFile()
.then(data=>{
	//console.log(data); <Buffer 68 65 6c 6c 6f>
})
