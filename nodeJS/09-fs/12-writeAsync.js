const fs = require('fs');


/*
fs.open('./12writeAsync.txt','w',(err,fd)=>{
	if(err){
		console.log('open err',err);
	}else{
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log('write err',err);
			}else{
				console.log('write success');
			}
			fs.close(fd,(err)=>{
				if(err){
					console.log('close err',err);
				}else{
					console.log('close success');
				}
			})
		})
	}
})


*/

fs.writeFile('./12writeAsync.txt','kuazhu',{flag:'w'},(err)=>{
	if(err){
		console.log('writeFile',err)
	}else{
		console.log('writeFile success');
	}
})
console.log('tset');