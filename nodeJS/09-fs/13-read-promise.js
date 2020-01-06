const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
//console.log(readFile);[Function: readFile]
//console.log(typeof readFile); function


readFile('./13-read-promise.txt',{flag:'r'})
.then(data=>{
	//console.log(data);<Buffer 68 65 6c 6c 6f>
})