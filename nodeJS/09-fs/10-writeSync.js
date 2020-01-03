const fs = require('fs');



//方法一
//1.打开文件

/*
const fd = fs.openSync('./10writeSync.txt','w');
//const fd = fs.openSync('./10writeSync.txt','a'); 'a'追加
//console.log(fd);  文件描述符fd的值为3

//2. 写文件
fs.writeSync(fd,'hello');


//3. 保存数据退出
fs.closeSync(fd);
*/



//方法二

fs.writeFileSync('./10writeSync.txt','kuazhu',{falg:'w'});

