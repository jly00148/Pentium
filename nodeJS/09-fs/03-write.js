const fs = require('fs');
/*
//1 打开文件
fs.open('01.txt','a',(err,fd)=>{
	if(err){
		console.log('write error...',err);
	}else{
		//2写数据
		fs.write(fd,'hello',(err)=>{
			if(err){
					console.log('write error...',err);
			}else{
				console.log('write success...');
			}
			//保存退出

			fs.close(fd,(err)=>{
				if(err){
					console.log('close error...',err);
				}else{
					console.log('close success...');
				}
			})
		});
	}
})
//2 读文件


//3 关闭文件
fs.closeSync(fd);
*/

fs.writeFile('./01.txt','kuahzu',{flag:'w'},err=>{
	if(err){
		console.log('writeFile err');
	}else{
		console.log('writeFile success');
	}
})
