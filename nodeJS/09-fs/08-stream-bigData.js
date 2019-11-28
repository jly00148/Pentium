const fs = require('fs');

const ws = fs.createWriteStream('./bb.mov');

const rs = fs.createReadStream('./rs.txt');

/*
ws.on('open',()=>{
	console.log('ws open...');
})
ws.on('finish',()=>{
	console.log('finish');
})
ws.write('abc');
ws.write('hello');
ws.end();
*/
rs.on('open',()=>{
	console.log('rs open...');
})

rs.on('close',()=>{
	console.log('rs close...');
})

rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('rs...');
})


rs.pipe(ws);