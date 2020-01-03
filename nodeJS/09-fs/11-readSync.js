const fs = require('fs');


/*
const fd = fs.openSync('./10writeSync.txt','r');
//console.log(fd); 3

const buf = Buffer.alloc(100);

console.log(buf);//<Buffer 00 00 00 00 00 00>
fs.readSync(fd,buf,0,100,1);
console.log(buf);// <Buffer 6b 75 61 7a 68 75>

fs.closeSync(fd);
*/

//简写
const data = fs.readFileSync('./10writeSync.txt',{flag:'r'});

//console.log(data); <Buffer 6b 75 61 7a 68 75>


