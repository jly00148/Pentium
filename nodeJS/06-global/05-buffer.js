//const buf = Buffer.from('hello');

//提个二进制的0或者1代表1bit （1位）
//8bit(位)  = 1B(一个字节)
//console.log(buf);//<Buffer 68 65 6c 6c 6f>

// const buf2  = Buffer.from('你好');
// console.log(buf2);

const buf3  = Buffer.alloc(10);
console.log(buf3);//Buffer 00 00 00 00 00 00 00 00 00 00
buf3[0] = 10;
console.log(buf3);//Buffer 0a 00 00 00 00 00 00 00 00 00
buf3[1] = 0x10;
console.log(buf3);//<Buffer 0a 10 00 00 00 00 00 00 00 00>
buf3[9] = 9;
console.log(buf3.toString());
const buf4 = Buffer.alloc(9);
buf4[0] 0xe4;
buf4[1] 0xbd;
buf4[2] 0xa0;
console.log(buf4.toString());