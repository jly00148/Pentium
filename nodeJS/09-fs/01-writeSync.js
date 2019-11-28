/*
const fs = require('fs');
//1. 打开文件
const fd = fs.openSync('./01.txt','w');
//2. 写入数据
fs.writeSync(fd,'hello');
//3. 保存退出
fs.closeSync(fd);
*/
const fs = require('fs');

fs.writeFileSync('./01.txt','kuahzu',{flag:'a'})